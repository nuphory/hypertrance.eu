export const FILTER_FRAGMENT = `#graphql
	fragment filterFragment on Filter {
		id
		label
		type
		values {
			id
			count
			input
			label
		}
	}
`;

export const IMAGE_FRAGMENT = `#graphql
	fragment imageFragment on Image {
		id
		altText
		width
		height
		url
	}
`;

export const MONEY_FRAGMENT = `#graphql
	fragment moneyFragment on MoneyV2 {
		amount
		currencyCode
	}
`;

export const METAFIELD_FRAGMENT = `#graphql
	fragment metafieldFragment on Metafield {
		id
		description
		value
	}
`;