import type { Settings } from '$lib/stores/settings';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const settings: Handle = async ({ event, resolve }) => {
	const cookies = event.cookies.getAll();

	const settings: Settings = {
		locale: 'en',
		theme: 'auto'
	};

	for (const cookie of cookies) {
		const { name, value } = cookie;
		if (!name.startsWith('preferences:settings.')) continue;

		const key = name.replace('preferences:settings.', '');
		settings[key] = value;
	}

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('lang="en" data-theme="auto"', get_attributes_string(settings))
	});
};

const get_attributes_string = (settings: Settings) => {
	let string = '';

	for (const [key, value] of Object.entries(settings)) {
		if (!value) continue;

		switch (key) {
			case 'locale':
				string += `lang="${value}" `;
				break;
			default:
				string += `data-${key}="${value}" `;
				break;
		}
	}

	return string;
};

export const handle = sequence(settings);
