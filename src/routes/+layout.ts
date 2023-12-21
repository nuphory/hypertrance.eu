import type { LayoutLoad } from './$types';

import { getMetaobjects } from '$src/lib/utils/shopify/custom';
export const load = (async () => {
	// fetch announcement bar metaobjects from shopify

	const announcements = await getMetaobjects({ type: 'announcement' });

	return { announcements };
}) satisfies LayoutLoad;
