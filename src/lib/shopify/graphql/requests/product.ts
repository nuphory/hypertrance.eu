import { ACollectionFragment, BaseCollectionFragment } from '../fragments/catalog/collection';
import {
        AProductFragment,
        AProductVariantFragment,
        BaseProductFragment,
        BaseProductVariantFragment,
        ProductFragment,
        ProductOptionFragment,
        ProductVariantFragment
} from '../fragments/catalog/product';
import { LicenseFragment, TestimonialFragment } from '../fragments/custom/catalog';
import MetaMediaFragment, { ArtworkFragment, DemoTrackFragment, SongFragment } from '../fragments/custom/media';
import MetadataFragment from '../fragments/custom/metadata';
import { BaseMetafieldFragment, BaseMetaobjectFieldFragment, BaseMetaobjectFragment, MetaobjectSEOFragment } from '../fragments/custom/metafield';
import SimpleTypes, { GenericFileFragment, ImageFragment, MediaImageFragment, MoneyV2Fragment, SEOFragment, VideoFragment } from '../fragments/simple-types';

const BaseProductQuery = `#graphql
        query BaseProductQuery (
                $id: ID, $handle: String
                $expansive: Boolean = false, $verbose: Boolean = false
                $selectedOptions: [SelectedOptionInput!]! = []
        ) {
                product(id: $id) {
                        ...BaseProductFragment
                }
        }

        ${SimpleTypes}

        ${BaseProductFragment}
        ${BaseProductVariantFragment}
        ${ProductOptionFragment}

        ${BaseMetafieldFragment}
`;

const BaseProductsQuery = `#graphql
        query BaseProductsQuery (
                $expansive: Boolean = false, $verbose: Boolean = false,
                $selectedOptions: [SelectedOptionInput!]! = [],
                $cursor: String, $reverseCursor: String, $first: Int = 25, $last: Int,
                $query: String = "vendor:hypertrance", $reverse: Boolean = false,
                $sortKey: ProductSortKeys = TITLE
        ) {
                products (
                        after: $cursor, before: $reverseCursor, first: $first, last: $last,
                        query: $query,
                        reverse: $reverse, sortKey: $sortKey
                ) {
                        edges {
                                cursor
                                node {
                                        ...BaseProductFragment
                                }
                        }
                        filters {
                                id
                                label
                                presentation
                                type
                                values {
                                        count
                                        id
                                        label
                                }
                        }
                        pageInfo {
                                ...PageInfoFragment
                        }
                }
        }

        ${SimpleTypes}

        ${BaseProductFragment}
        ${BaseProductVariantFragment}
        ${ProductOptionFragment}

        ${BaseMetafieldFragment}
`;

const AProductQuery = `#graphql
        query AProductQuery (
                $id: ID, $handle: String
                $expansive: Boolean = false, $verbose: Boolean = false
                $selectedOptions: [SelectedOptionInput!]! = [],

                $first: Int = 25, $cursor: String, $reverseCursor: String, $last: Int,

        ) {
                product(id: $id, handle: $handle) {
                        ...AProductFragment
                }
        }

        ${SimpleTypes}

        ${BaseProductFragment}
        ${BaseProductVariantFragment}
        ${ProductOptionFragment}

        ${BaseMetafieldFragment}

        ${AProductFragment}
        ${ACollectionFragment}
        ${BaseCollectionFragment}
        ${AProductVariantFragment}

`;

const AProductsQuery = `#graphql
        query AProductsQuery (
                $expansive: Boolean = false, $verbose: Boolean = false,
                $selectedOptions: [SelectedOptionInput!]! = [],

                $cursor: String, $reverseCursor: String, $first: Int = 25, $last: Int,
                $query: String = "vendor:hypertrance", $reverse: Boolean = false,
                $sortKey: ProductSortKeys = TITLE
        ) {
                products (
                        after: $cursor, before: $reverseCursor, first: $first, last: $last,
                        query: $query,
                        reverse: $reverse, sortKey: $sortKey
                ) {
                        edges {
                                cursor
                                node {
                                        ...AProductFragment
                                }
                        }
                        filters {
                                id
                                label
                                presentation
                                type
                                values {
                                        count
                                        id
                                        label
                                }
                        }
                        pageInfo {
                                ...PageInfoFragment
                        }
                }
        }

        ${SimpleTypes}

        ${BaseProductFragment}
        ${BaseProductVariantFragment}
        ${ProductOptionFragment}

        ${BaseMetafieldFragment}

        ${AProductFragment}
        ${ACollectionFragment}
        ${BaseCollectionFragment}
        ${AProductVariantFragment}
`;

const ProductQuery = `#graphql
        query ProductQuery (
                $id: ID, $handle: String

                $expansive: Boolean = false, $verbose: Boolean = false
                $selectedOptions: [SelectedOptionInput!] = [],

                $first: Int = 25, $cursor: String, $reverseCursor: String, $last: Int,
                $reverse: Boolean = false

        ) {
                product(id: $id, handle: $handle) {
                        ...ProductFragment
                }
        }

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

        ${BaseProductFragment}
        ${BaseProductVariantFragment}
        ${ProductOptionFragment}

        ${BaseMetaobjectFragment}
        ${BaseMetaobjectFieldFragment}
        ${MetaobjectSEOFragment}
        ${BaseMetafieldFragment}

        ${AProductFragment}
        # {ACollectionFragment}
        ${BaseCollectionFragment}
        ${AProductVariantFragment}

        ${ProductFragment}
        # {ProductVariantFragment}

        #{MetaMediaFragment}
        ${ArtworkFragment}
        ${DemoTrackFragment}
        ${SongFragment}
        # {AlbumFragment}

        ${MetadataFragment}

        ${TestimonialFragment}
        ${LicenseFragment}
`;

const ProductsQuery = `#graphql
        query ProductsQuery (
                $expansive: Boolean = false, $verbose: Boolean = false,
                $selectedOptions: [SelectedOptionInput!]! = [],

                $cursor: String, $reverseCursor: String, $first: Int = 25, $last: Int,
                $query: String = "vendor:hypertrance", $reverse: Boolean = false,
                $sortKey: ProductSortKeys = TITLE
        ) {
                products (
                        after: $cursor, before: $reverseCursor, first: $first, last: $last,
                        query: $query,
                        reverse: $reverse, sortKey: $sortKey
                ) {
                        edges {
                                cursor
                                node {
                                        ...ProductFragment
                                }
                        }
                        filters {
                                id
                                label
                                presentation
                                type
                                values {
                                        count
                                        id
                                        label
                                }
                        }
                        pageInfo {
                                ...PageInfoFragment
                        }
                }
        }

        ${SimpleTypes}

        ${BaseProductFragment}
        ${BaseProductVariantFragment}
        ${ProductOptionFragment}

        ${BaseMetafieldFragment}

        ${AProductFragment}
        ${ACollectionFragment}
        ${BaseCollectionFragment}
        ${AProductVariantFragment}

        ${ProductFragment}
        ${ProductVariantFragment}

        ${MetaMediaFragment}
        ${MetadataFragment}

        ${TestimonialFragment}
        ${LicenseFragment}
`;

export {
        AProductQuery,
        AProductsQuery,
        BaseProductQuery,
        BaseProductsQuery,
        ProductQuery,
        ProductsQuery
};

export default ProductQuery;
