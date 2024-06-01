import type { LayoutLoad } from './$types.js';

export const load: LayoutLoad = ({ url }) => {
	return {
		url: url,
	};
};
