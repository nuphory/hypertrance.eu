import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import artists from '$lib/assets/artists';

export const GET = (({ url }) => {
	let body;

	const artistQuery: string | null = url.searchParams.get('artist');
	if (artistQuery != null) {
		const artist = artists.get(artistQuery);
		if (artist != null) {
			body = artist;
		} else {
			throw error(404, 'Artist not found');
		}
	} else {
		body = artists;
	}

	return json(
		JSON.parse(
			JSON.stringify(body, (key, value) => {
				if (value instanceof Map) {
					return {
						dataType: 'Map',
						value: Object.fromEntries(value) // or with spread: value: [...value]
					};
				} else {
					return value;
				}
			})
		)
	);
}) satisfies RequestHandler;
