import CollectionFragments, {
	ACollectionFragment,
	BaseCollectionFragment,
	CollectionFragment
} from '../fragments/catalog/collection';
import {
	AProductFragment,
	AProductVariantFragment,
	BaseProductFragment,
	BaseProductVariantFragment,
	ProductOptionFragment
} from '../fragments/catalog/product';
import MetaMediaFragment, {
	AlbumFragment,
	ArtworkFragment,
	SongFragment
} from '../fragments/custom/media';
import MetadataFragment, { AuthorFragment, LinkFragment } from '../fragments/custom/metadata';
import {
	BaseMetafieldFragment,
	BaseMetaobjectFieldFragment,
	BaseMetaobjectFragment,
	MetaobjectSEOFragment
} from '../fragments/custom/metafield';
import SimpleTypes, {
	GenericFileFragment,
	ImageFragment,
	MediaImageFragment,
	MoneyV2Fragment,
	PageInfoFragment,
	SEOFragment,
	VideoFragment
} from '../fragments/simple-types';

const BaseCollectionQuery = `#graphql
        query BaseCollectionQuery (
                $id: ID, $handle: String,
                $expansive: Boolean = false, $verbose: Boolean = false
        ) {
                collection(handle: $handle, id: $id) {
                        ...BaseCollectionFragment
                }
        }

        # {SimpleTypes}
        # {ExternalVideoFragment}
        # {GenericFileFragment}
        ${ImageFragment}
        ${MediaImageFragment}
        # {Model3dFragment}
        # {MoneyV2Fragment}
        ${SEOFragment}
        ${VideoFragment}
        # {PageInfoFragment}

        ${BaseCollectionFragment}

        ${BaseMetafieldFragment}
`;

const BaseCollectionsQuery = `#graphql
        query BaseCollectionsQuery (
                $expansive: Boolean = false, $verbose: Boolean = false,
                $cursor: String, $reverseCursor: String, $first: Int = 25, $last: Int,
                $query: String, $reverse: Boolean = false,
                $sortKey: CollectionSortKeys = MANUAL
        ) {
                collections (
                        after: $cursor, before: $reverseCursor, first: $first, last: $last,
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
                $selectedOptions: [SelectedOptionInput!] = [],
                $filters: [ProductFilter!] = [{productVendor: "hypertrance"}],
        ) {
                collection(handle: $handle, id: $id) {
                        ...ACollectionFragment
                }
        }

        # {SimpleTypes}
        # {ExternalVideoFragment}
        # {GenericFileFragment}
        ${ImageFragment}
        ${MediaImageFragment}
        # {Model3dFragment}
        ${MoneyV2Fragment}
        ${SEOFragment}
        ${VideoFragment}
        # {PageInfoFragment}

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

                $cursor: String, $reverseCursor: String, $first: Int = 25, $last: Int,
                $query: String, $reverse: Boolean = false,
                $sortKey: CollectionSortKeys = MANUAL
        ) {
                collections (
                        after: $cursor, before: $reverseCursor, first: $first, last: $last,
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
                $selectedOptions: [SelectedOptionInput!] = [],
                $first: Int = 25, $cursor: String, $reverseCursor: String, $reverse: Boolean = false, $last: Int,
                $productSortKey: ProductCollectionSortKeys = MANUAL,
                $filters: [ProductFilter!] = [{productVendor: "hypertrance"}]
        ) {
                collection(handle: $handle, id: $id) {
                        ...CollectionFragment
                }
        }

        # {CollectionFragments}
        ${CollectionFragment}
        ${ACollectionFragment}
        ${BaseCollectionFragment}

        # {SimpleTypes}
        # {ExternalVideoFragment}
        ${GenericFileFragment}
        ${ImageFragment}
        ${MediaImageFragment}
        # {Model3dFragment}
        ${MoneyV2Fragment}
        ${SEOFragment}
        ${VideoFragment}
        # {PageInfoFragment}

        #{MetaMediaFragment}
        ${ArtworkFragment}
        #{DemoTrackFragment}
        ${SongFragment}
        ${AlbumFragment}

        ${AuthorFragment}
        ${LinkFragment}

        ${BaseMetafieldFragment}
        ${BaseProductFragment}

        ${ProductOptionFragment}
        ${BaseProductVariantFragment}

        ${BaseMetaobjectFieldFragment}
        ${BaseMetaobjectFragment}
        ${MetaobjectSEOFragment}

        ${AProductFragment}
        ${AProductVariantFragment}
`;

const CollectionsQuery = `#graphql
        query CollectionsQuery (
                $expansive: Boolean = false, $verbose: Boolean = false,
                $selectedOptions: [SelectedOptionInput!] = [],

                $cursor: String, $reverseCursor: String, $first: Int = 25, $last: Int,
                $query: String, $reverse: Boolean = false,
                $sortKey: CollectionSortKeys = RELEVANCE,

                $productSortKey: ProductCollectionSortKeys = MANUAL,
                $filters: [ProductFilter!] = [{productVendor: "hypertrance"}]
        ) {
                collections (
                        after: $cursor, before: $reverseCursor, first: $first, last: $last,
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

         # {CollectionFragments}
        ${CollectionFragment}
        ${ACollectionFragment}
        ${BaseCollectionFragment}

        # {SimpleTypes}
        # {ExternalVideoFragment}
        ${GenericFileFragment}
        ${ImageFragment}
        ${MediaImageFragment}
        # {Model3dFragment}
        ${MoneyV2Fragment}
        ${SEOFragment}
        ${VideoFragment}
        ${PageInfoFragment}

        #{MetaMediaFragment}
        ${ArtworkFragment}
        #{DemoTrackFragment}
        ${SongFragment}
        ${AlbumFragment}

        ${AuthorFragment}
        ${LinkFragment}

        ${BaseMetafieldFragment}
        ${BaseProductFragment}

        ${ProductOptionFragment}
        ${BaseProductVariantFragment}

        ${BaseMetaobjectFieldFragment}
        ${BaseMetaobjectFragment}
        ${MetaobjectSEOFragment}

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
