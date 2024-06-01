import { makeShopifyRequest } from './client';
import { MetaobjectsQuery } from './graphql/custom';

// export const MetaobjectsQuery = `#graphql
// 	query MetaobjectsQuery($after: String, $before: String, $first: Int, $last: Int, $reverse: Boolean, $sortKey: String, $type: String!) {
// 		metafields(after: $after, before: $before, first: $first, last: $last, reverse: $reverse, sortKey: $sortKey, type: $type) {
// 			nodes {
// 				...metaobjectFragment
// 			}
// 		}
// 	}
// 	${METAOBJECT_FRAGMENT}
// `;

export async function getMetaobjects(options: {
	after?: string;
	before?: number;
	first?: number;
	last?: number;
	reverse?: boolean;
	sortKey?: string;
	type: string;
}) {
	const data = await makeShopifyRequest(MetaobjectsQuery, options);

	const nodes: any[] = data.metaobjects.nodes;

	return nodes;
}
