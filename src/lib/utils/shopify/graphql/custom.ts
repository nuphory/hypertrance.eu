export const METAFIELD_FRAGMENT = `#graphql
	fragment metafieldFragment on Metafield {
		id
		description
		value
	}
`;

export const METAOBJECTFIELD_FRAGMENT = `#graphql
	fragment metaobjectFieldFragment on MetaobjectField {
		key
		type
		value
	}
`;

export const METAOBJECT_FRAGMENT = `#graphql
	fragment metaobjectFragment on Metaobject {
		fields {
			...metaobjectFieldFragment
		}
		handle
		id
		type
		updatedAt
	}
	${METAOBJECTFIELD_FRAGMENT}
`;

export const MetaobjectsQuery = `#graphql
	query ($after: String, $before: String, $first: Int = 10, $last: Int, $reverse: Boolean, $sortKey: String, $type: String!) {
		metaobjects(after: $after, before: $before, first: $first, last: $last, reverse: $reverse, sortKey: $sortKey, type: $type) {
			nodes {
				...metaobjectFragment
			}
		}
	}
	${METAOBJECT_FRAGMENT}
`;
