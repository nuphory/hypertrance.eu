import type { boolstring } from '$lib/utils/constants';
import { persistentMap } from '@nanostores/persistent';
import { set_cookie } from './cookie-consent';

type Settings = {
	[key: string]: string | undefined;
	theme: 'auto' | 'light' | 'dark';
	print?: boolstring;
	motion?: 'reduced';
	transparency?: 'reduced';
	contrast?: 'more' | 'less';
	locale: string;
	currency?: string;
};

const default_settings: Settings = {
	theme: 'auto',
	locale: 'en',
	currency: 'EUR'
};

const settings_store = persistentMap<Settings>('settings:', default_settings);

const apply_settings = (settings: Settings) => {
	for (const [key, value] of Object.entries(settings)) {
		if (!value || key === 'currency') continue;
		// console.debug(`[UserSettings] Applying ${key}=${value}`);
		switch (key) {
			case 'locale':
				document.documentElement.lang = value;
				break;
			default:
				document.documentElement.dataset[key] = value;
				break;
		}

		// console.debug(`[UserSettings] Setting cookie: ${key}=${value}`);
		set_cookie('preferences', `settings.${key}`, value);
	}
};

export { apply_settings, settings_store, type Settings };

settings_store.listen(apply_settings);
