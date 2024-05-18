import type { PageServerLoad } from "./$types";

/** @type {import('@sveltejs/kit').Load} */
export const load: PageServerLoad = async ({ params }) => {
        const { product: handle } = params;



	return {}
};
