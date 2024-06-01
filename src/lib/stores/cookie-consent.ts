import { ONE_WEEK, ONE_YEAR, type boolstring } from '$lib/utils/constants';
import { delete_cookie, get_cookies, set_cookie, type CookieAttributes } from '$lib/utils/cookie';
import { persistentMap } from '@nanostores/persistent';

type CookieConsent = {
	essential: 'true';
	preferences?: boolstring;
	analytics?: boolstring;
	marketing?: boolstring;
};

// spread the keys of the CookieConsent type
type CookieType = keyof CookieConsent;

const compliance_attributes: {
	[type: string]: CookieAttributes;
} = {
	essential: { samesite: 'strict', 'max-age': ONE_YEAR },
	preferences: { 'max-age': ONE_YEAR },
	analytics: { 'max-age': ONE_WEEK * 4 },
	marketing: { partitioned: true, 'max-age': ONE_WEEK * 4 }
};

const default_consent: CookieConsent = {
	essential: 'true',
	preferences: 'true',
	analytics: 'false',
	marketing: 'false'
};

const cookie_consent_store = persistentMap<CookieConsent>('cookie-consent:', default_consent);

const set_compliant_cookie = (
	type: CookieType,
	key: string,
	value: string,
	attributes?: CookieAttributes
) => {
	const consent = cookie_consent_store.get();

	if (consent[type]) {
		set_cookie(`${type}:${key}`, value, {
			...attributes,
			...compliance_attributes[type]
		});
	} else {
		delete_cookie(`${type}:${key}`);
	}
};

const apply_cookie_consent = (consent: CookieConsent) => {
	const cookies = get_cookies();

	for (const [type, value] of Object.entries(consent)) {
		// store cookie consent settings as essential cookies
		set_compliant_cookie('essential', `cookie-consent.${type}`, value);

		// clear cookies if consent is revoked
		if (value) continue;
		for (const key in cookies) {
			if (key.startsWith(`${key}:`)) {
				delete_cookie(key);
			}
		}
	}
};

export {
	apply_cookie_consent,
	cookie_consent_store,
	set_compliant_cookie as set_cookie,
	type CookieConsent
};

cookie_consent_store.listen(apply_cookie_consent);
