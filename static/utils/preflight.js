const keys = ['theme', 'print', 'motion', 'transparency', 'contrast', 'locale', 'currency'];

/** @type {import('../../src/lib/stores/settings').Settings} */
const user_settings = {}

for (const key of keys) {
    user_settings[key] = localStorage.getItem(`settings.${key}`);
}

for (const [key, value] of Object.entries(user_settings)) {
	if (!value || key === 'currency') continue;
	// console.debug(`[Preflight] Applying user setting: ${key}=${value}`);
	switch (key) {
		case 'locale':
			document.documentElement.lang = value;
			break;
		default:
			document.documentElement.dataset[key] = value;
			break;
	}
}
