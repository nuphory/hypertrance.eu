import CollectionFragments, {
	ACollectionFragment,
	BaseCollectionFragment
} from '../fragments/catalog/collection';
import {
	AProductFragment,
	AProductVariantFragment,
	BaseProductFragment,
	BaseProductVariantFragment,
	ProductOptionFragment
} from '../fragments/catalog/product';
import MetaMediaFragment from '../fragments/custom/media';
import MetadataFragment from '../fragments/custom/metadata';
import {
	BaseMetafieldFragment,
	BaseMetaobjectFieldFragment,
	BaseMetaobjectFragment
} from '../fragments/custom/metafield';
import SimpleTypes from '../fragments/simple-types';

const BaseCollectionQuery = `#graphql
        query BaseCollectionQuery (
                $id: ID, $handle: String,
                $expansive: Boolean = false, $verbose: Boolean = false
        ) {
                collection(handle: $handle, id: $id) {
                        ...BaseCollectionFragment
                }
        }

        ${SimpleTypes}

        ${BaseCollectionFragment}

        ${BaseMetafieldFragment}
`;

const BaseCollectionsQuery = `#graphql
        query BaseCollectionsQuery (
                $expansive: Boolean = false, $verbose: Boolean = false,
                $cursor: String, $reverseCursor: String, $resultsPerPage: Int = 25,
                $query: String, $reverse: Boolean = false,
                $sortKey: CollectionSortKeys = MANUAL
        ) {
                collections (
                        after: $cursor, before: $reverseCursor, first: $resultsPerPage, last: $resultsPerPage,
                        query: $query,
                        reverse: $reverse, sortKey: $sortKey
                ) {
                        edges {
                                cursor
                                node {
                                        ...BaseCollectionFragment
                                }
                        }
                        pageInfo {
                                ...PageInfoFragment
                        }
                        totalCount
                }
        }

        ${SimpleTypes}

        ${BaseCollectionFragment}

        ${BaseMetafieldFragment}
`;

const ACollectionQuery = `#graphql
        query ACollectionQuery (
                $id: ID, $handle: String,
                $expansive: Boolean = false, $verbose: Boolean = false,
                $selectedOptions: [SelectedOptionInput!]! = [],
                $filters: [ProductFilter!] = [productVendor: "hypertrance"],
        ) {
                collection(handle: $handle, id: $id) {
                        ...ACollectionFragment
                }
        }

        ${SimpleTypes}

        ${BaseCollectionFragment}

        ${BaseMetafieldFragment}

        ${ACollectionFragment}
        ${BaseProductFragment}

        ${ProductOptionFragment}
        ${BaseProductVariantFragment}

`;

const ACollectionsQuery = `#graphql
        query ACollectionsQuery (
                $expansive: Boolean = false, $verbose: Boolean = false,
                $selectedOptions: [SelectedOptionInput!]! = [],
                $filters: [ProductFilter!] = [productVendor: "hypertrance"],

                $cursor: String, $reverseCursor: String, $resultsPerPage: Int = 25,
                $query: String, $reverse: Boolean = false,
                $sortKey: CollectionSortKeys = MANUAL
        ) {
                collections (
                        after: $cursor, before: $reverseCursor, first: $resultsPerPage, last: $resultsPerPage,
                        query: $query,
                        reverse: $reverse, sortKey: $sortKey
                ) {
                        edges {
                                cursor
                                node {
                                        ...ACollectionFragment
                                }
                        }
                        pageInfo {
                                ...PageInfoFragment
                        }
                        totalCount
                }
        }

        ${SimpleTypes}

        ${BaseCollectionFragment}

        ${BaseMetafieldFragment}

        ${ACollectionFragment}
        ${BaseProductFragment}

        ${ProductOptionFragment}
        ${BaseProductVariantFragment}

`;

const CollectionQuery = `#graphql
        query CollectionQuery (
                $id: ID, $handle: String,
                $expansive: Boolean = false, $verbose: Boolean = false,
                $selectedOptions: [SelectedOptionInput!]! = [],
                $resultsPerPage: Int = 25, $cursor: String, $reverseCursor: String, $reverse: Boolean = false,
                $productSortKey: ProductCollectionSortKeys = MANUAL,
                $filters: [ProductFilter!] = [productVendor: "hypertrance"]
        ) {
                collection(handle: $handle, id: $id) {
                        ...CollectionFragment
                }
        }

        ${CollectionFragments}

        ${SimpleTypes}
        ${MetaMediaFragment}
        ${MetadataFragment}

        ${BaseMetafieldFragment}
        ${BaseProductFragment}

        ${ProductOptionFragment}
        ${BaseProductVariantFragment}

        ${BaseMetaobjectFieldFragment}
        ${BaseMetaobjectFragment}

        ${AProductFragment}
        ${AProductVariantFragment}
`;

const CollectionsQuery = `#graphql
        query CollectionsQuery (
                $expansive: Boolean = false, $verbose: Boolean = false,
                $selectedOptions: [SelectedOptionInput!]! = [],

                $cursor: String, $reverseCursor: String, $resultsPerPage: Int = 25,
                $query: String, $reverse: Boolean = false,
                $sortKey: CollectionSortKeys = MANUAL,

                $productSortKey: ProductCollectionSortKeys = MANUAL,
                $filters: [ProductFilter!] = [productVendor: "hypertrance"]
        ) {
                collections (
                        after: $cursor, before: $reverseCursor, first: $resultsPerPage, last: $resultsPerPage,
                        query: $query,
                        reverse: $reverse, sortKey: $sortKey
                ) {
                        edges {
                                cursor
                                node {
                                        ...CollectionFragment
                                }
                        }
                        pageInfo {
                                ...PageInfoFragment
                        }
                        totalCount
                }
        }

        ${CollectionFragments}

        ${SimpleTypes}
        ${MetaMediaFragment}
        ${MetadataFragment}

        ${BaseMetafieldFragment}
        ${BaseProductFragment}

        ${ProductOptionFragment}
        ${BaseProductVariantFragment}

        ${BaseMetaobjectFieldFragment}
        ${BaseMetaobjectFragment}

        ${AProductFragment}
        ${AProductVariantFragment}
`;

export {
	ACollectionQuery,
	ACollectionsQuery,
	BaseCollectionQuery,
	BaseCollectionsQuery,
	CollectionQuery,
	CollectionsQuery
};

export default CollectionQuery;
