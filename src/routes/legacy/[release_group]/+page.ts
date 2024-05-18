// load param from svelte pageload

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		release_group: params.release_group.split('-').join(' '),
	};
}
