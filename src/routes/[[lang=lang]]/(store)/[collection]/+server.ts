import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ request, params, fetch }) => {
	const { collection } = params;

	const newRequest = new Request(
		request.url.replace(`/${collection}`, `/store/collection/${collection}`),
		request
	);

	return fetch(newRequest);
};
