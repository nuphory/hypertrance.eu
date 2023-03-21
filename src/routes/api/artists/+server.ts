import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import artists from '$lib/metadata/artist';
import { toSnakeCase } from '$lib/utils/stringFormat';

export const GET = (({ url }) => {
	let body;

	const artistQuery: string | null = url.searchParams.get('artist');
	if (artistQuery != null) {
		const artist = Array.from(artists).find(
			(artist) => toSnakeCase(artist.name) === toSnakeCase(artistQuery)
		);
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
