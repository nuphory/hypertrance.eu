import { FILTER_FRAGMENT, IMAGE_FRAGMENT, METAFIELD_FRAGMENT, MONEY_FRAGMENT } from './common';

export const SELECTED_OPTION_FRAGMENT = `#graphql
	fragment selectedOptionFragment on SelectedOption {
		name
		value
	}
`;

export const PRODUCT_OPTION_FRAGMENT = `#graphql
	fragment productOptionFragment on ProductOption {
		id
		name
		values
	}
`;

export const PRODUCT_VARIANT_FRAGMENT = `#graphql
	fragment productVariantFragment on ProductVariant {
		id
		title
		barcode
		availableForSale
		price {
			...moneyFragment
		}
		compareAtPrice {
			...moneyFragment
		}
		image {
			...imageFragment
		}
		selectedOptions {
			...selectedOptionFragment
		}
		product {
			handle
			title
		}

	}
	${MONEY_FRAGMENT}
	${IMAGE_FRAGMENT}
	${SELECTED_OPTION_FRAGMENT}
`;

export const PRODUCT_FRAGMENT = `#graphql
	fragment productFragment on Product {
		id
		title
		handle
		tags
		productType
		vendor
		description
		descriptionHtml
		options {
			...productOptionFragment
		}
		featuredImage {
			...imageFragment
		}
		collections(first: $first_collections) {
			nodes {
				id
				handle
				title
				description
				descriptionHtml
				image {
					...imageFragment
				}
			}
		}
		images(first: $first_images) {
			nodes {
				...imageFragment
			}
		}
		variants(first: $first_variants) {
			nodes {
				...productVariantFragment
			}
		}

		variantBySelectedOptions (selectedOptions: $selectedOptions) @include(if: $hasSelectedOptions) {
			...productVariantFragment
		}
	}
	${PRODUCT_OPTION_FRAGMENT}
	${PRODUCT_VARIANT_FRAGMENT}
`;

export const COLLECTION_FRAGMENT = `#graphql
	fragment collectionFragment on Collection {
		id
		handle
		title
		description
		descriptionHtml
		image {
			...imageFragment
		}
		products(first: $first_products) {
			nodes {
				...productFragment
			}
		}
	}
	${PRODUCT_FRAGMENT}
`;

export const CollectionsQuery = `#graphql
	query ($first: Int!, $first_collections: Int = 1, $first_images: Int = 2, $first_variants: Int = 1) {
		collections(first: $first) {
			edges {
				cursor
				node {
					...collectionFragment
				}
			}
			pageInfo
			totalCount
		}
	}
	${COLLECTION_FRAGMENT}
`;

export const CollectionQuery = `#graphql
	query ($handle: String, $id: String, $first_collections: Int, $first_images: Int, $first_variants: Int, $selectedOptions: [SelectedOptionInput!]!, $hasSelectedOptions: Boolean = false, $metafieldIdentifiers: [HasMetafieldsIdentifier!] = [], $hasMetafields: Boolean = false) {
		collection(handle: $handle, id: $id) {
			...collectionFragment
			metafields(identifiers: $metafieldIdentifiers) @include (if: $hasMetafields) {
				...metafieldFragment
			}
		}
	}
	${COLLECTION_FRAGMENT}
	${METAFIELD_FRAGMENT}
`;

export const CollectionByHandleQuery = `#graphql
	query ($handle: String!, $first_collections: Int, $first_images: Int, $first_variants: Int, $selectedOptions: [SelectedOptionInput!]!, $hasSelectedOptions: Boolean = false, $metafieldIdentifiers: [HasMetafieldsIdentifier!] = [], $hasMetafields: Boolean = false) {
		collectionByHandle(handle: $handle, id: $id) {
			...collectionFragment
			metafields(identifiers: $metafieldIdentifiers) @include (if: $hasMetafields) {
				...metafieldFragment
			}
		}
	}
	${COLLECTION_FRAGMENT}
	${METAFIELD_FRAGMENT}
`;

export const ProductsQuery = `#graphql
	query ($first: Int, $after: String, $first_collections: Int = 1, $first_images: Int = 2, $first_variants: Int = 1, $query: String) {
		products(first: $first, after: $after, query: $query) {
			edges {
				cursor
				node {
					...productFragment
				}
			}
			filters {
				...filterFragment
			}
			pageInfo
		}
	}
	${PRODUCT_FRAGMENT}
	${FILTER_FRAGMENT}
`;

export const ProductQuery = `#graphql
	query ($handle: String, $id: String, $first_collections: Int = 10, $first_images: Int = 50, $first_variants: Int = 10, $selectedOptions: [SelectedOptionInput!]!, $hasSelectedOptions: Boolean = false, $metafieldIdentifiers: [HasMetafieldsIdentifier!] = ["descriptors.subtitle"], $hasMetafields: Boolean = true) {
		product(handle: $handle, id: $id) {
			...productFragment
			metafields(identifiers: $metafieldIdentifiers) @include (if: $hasMetafields) {
				...metafieldFragment
			}
		}
	}
	${PRODUCT_FRAGMENT}
	${METAFIELD_FRAGMENT}
`;

export const ProductByHandleQuery = `#graphql
	query ($handle: String!, $first_collections: Int = 10, $first_images: Int = 50, $first_variants: Int = 10, $selectedOptions: [SelectedOptionInput!]!, $hasSelectedOptions: Boolean = false, $metafieldIdentifiers: [HasMetafieldsIdentifier!] = [HasMetafieldsIdentifier { key: "descriptors.subtitle"}], $hasMetafields: Boolean = true) {
		productByHandle(handle: $handle) {
			...productFragment
			metafields(identifiers: $metafieldIdentifiers) @include (if: $hasMetafields) {
				...metafieldFragment
			}
		}
	}
	${PRODUCT_FRAGMENT}
	${METAFIELD_FRAGMENT}
`;

export const ProductRecommendationsQuery = `#graphql
	query ($productId: ID!, $first_collections: Int = 1, $first_images: Int = 2, $first_variants: Int = 1) {
		productRecommendations(productId: $productId) {
			...productFragment
		}
	}
	${PRODUCT_FRAGMENT}
`;

export const ProductTagsQuery = `#graphql
	query ($first: Int = 50) {
		productTags(first: $first) {
			edges {
				cursor
				node
			}
			pageInfo
		}
	}
`;

export const ProductTypesQuery = `#graphql
	query ($first: Int = 50) {
		productTypes(first: $first) {
			edges {
				cursor
				node
			}
			pageInfo
		}
	}
`;
