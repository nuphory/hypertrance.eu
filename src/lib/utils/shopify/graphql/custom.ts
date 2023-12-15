export const METAOBJECTFIELD_FRAGMENT = `#graphql
	fragment metaobjectFieldFragment on MetaobjectField {
		key
		type
		value
		reference {
			... on MediaImage {
				image {
					url
				}
			}
		}
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

export const TESTIMONIAL_FRAGMENT = `#graphql
	fragment testimonialFragment on Metaobject {
		fields {
			key
			type
			value
			reference {
				...metaobjectFragment
			}
		}
		handle
		id
		type
		updatedAt
	}
	${METAOBJECT_FRAGMENT}
`;

export const METAFIELD_FRAGMENT = `#graphql
	fragment metafieldFragment on Metafield {
		namespace
		key
		description
		value
		references(first: 10) {
			nodes {
				...testimonialFragment
			}
		}
	}
	${TESTIMONIAL_FRAGMENT}
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
