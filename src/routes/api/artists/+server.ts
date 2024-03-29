import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import type { Artist } from '$src/lib/legacy/metadata/artist';
import { toSnakeCase } from '$lib/utils/stringFormat';

const modules = await Promise.all(
	Object.values(import.meta.glob('$lib/assets/artists/*.ts')).map((module) => module())
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const artists = modules.map((module: unknown) => module.default);

export const GET = (async ({ url }) => {
	let artistQuery: string | null = url.searchParams.get('artist');

	if (artistQuery != null) {
		artistQuery = toSnakeCase(artistQuery);
		const artist = artists.find((artist: Artist) => {
			return toSnakeCase(artist.name) === artistQuery;
		});

		if (artist != null) {
			return json(artist);
		} else {
			throw error(404, 'Artist not found');
		}
	}

	return json(artists);
}) satisfies RequestHandler;
