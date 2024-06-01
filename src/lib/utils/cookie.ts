import { ONE_YEAR } from './constants';

type CookieAttributes = {
	domain?: string;
	expires?: Date;
	'max-age'?: number;
	partitioned?: boolean;
	path?: string;
	samesite?: 'strict' | 'lax' | 'none';
	secure?: boolean;
};

/**
 * get all cookies
 * @returns {Array<[key: string, value: string]>} an array of key-value pairs of the cookies
 */
const get_cookies = () => {
	const all_cookies = document.cookie.split(';');

	const cookies: {
		[key: string]: string;
	} = {};

	all_cookies.forEach((cookie) => {
		const [key, value] = cookie.trim().split('=');
		cookies[decodeURIComponent(key)] = decodeURIComponent(value);
	});

	return cookies;
};

/**
 * get a cookie with the given key
 * @param {string} key the key of the cookie to be retrieved
 * @returns {string | undefined} the value of the cookie if it exists, undefined otherwise
 */
const get_cookie = (key: string): string | undefined => {
	const cookies = get_cookies();

	return cookies[key];
};

/**
 * set a cookie with the given key, value and optional attributes
 * @param {string} key the key of the cookie
 * @param {string} value the value of the cookie
 * @param {CookieAttributes} attributes attributes of the cookie to be set, defaults with a max-age of one year
 * @returns {string} the value of the cookie that was set
 */
const set_cookie = (
	key: string,
	value: string,
	attributes: CookieAttributes = {
		'max-age': ONE_YEAR,
		samesite: 'lax'
	}
) => {
	// if samesite is set to none, secure must be true
	if (attributes.samesite === 'none') attributes.secure = true;

	let cookie = `${key}=${encodeURIComponent(value)}`;

	for (const [key, value] of Object.entries(attributes)) {
		switch (key) {
			case 'expires':
				cookie += `; expires=${(value as Date).toUTCString()}`;
				break;
			case 'partitioned':
			case 'secure':
				if (value) cookie += `; ${key}`;
				break;
			default:
				cookie += `; ${key}=${encodeURIComponent(value.toString())}`;
				break;
		}
	}
	console.debug(cookie);
	document.cookie = cookie;
	return get_cookie(key);
};

/**
 * delete a cookie with the given key
 * @param {string} key the key of the cookie to be deleted
 * @returns {boolean} true if the cookie was deleted, false otherwise
 */
const delete_cookie = (key: string) => {
	return !set_cookie(key, '', { expires: new Date(0) });
};

export { delete_cookie, get_cookie, get_cookies, set_cookie, type CookieAttributes };
