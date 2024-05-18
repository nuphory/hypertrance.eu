const BaseMetafieldFragment = `#graphql
        fragment BaseMetafieldFragment on Metafield {
                createdAt @include(if: $expansive)
                description @include(if: $verbose)
                id @include(if: $verbose)
                key
                namespace @include(if: $verbose)
                type
                updatedAt @include(if: $expansive)
                value
        }
`;

const BaseMetaobjectFieldFragment = `#graphql
        fragment BaseMetaobjectFieldFragment on MetaobjectField {
                key
                type @include(if: $verbose)
                value
        }
`;

const MetaobjectSEOFragment = `#graphql
        fragment MetaobjectSEOFragment on MetaobjectSEO {
                description {
                        ...BaseMetaobjectFieldFragment
                }
                title {
                        ...BaseMetaobjectFieldFragment
                }
        }

`;

const BaseMetaobjectFragment = `#graphql
        fragment BaseMetaobjectFragment on Metaobject {
                handle
                id
                seo {
                        ...MetaobjectSEOFragment
                }
                type @include(if: $verbose)
                updatedAt @include(if: $expansive)
                # fields {
                #         ...BaseMetaobjectFieldFragment
                # }
        }
`;

const AMetafieldFragment = `#graphql
        fragment AMetafieldFragment on Metafield {
                ...BaseMetafieldFragment
                references (
                        first: $resultsPerPage,
                        after: $cursor,
                        last: $resultsPerPage,
                        before: $reverseCursor
                ) {
                        ...BaseCollectionFragment
                        ...GenericFileFragment
                        ...MediaImageFragment
                        ...BaseMetaobjectFragment
                        ...Model3dFragment
                        ...BasePageFragment
                        ...BaseProductFragment
                        ...BaseProductVariantFragment
                        ...VideoFragment
                }
        }
`;

const AMetaobjectFieldFragment = `#graphql
        fragment AMetaobjectFieldFragment on MetaobjectField {
                ...BaseMetaobjectFieldFragment
                references (
                        first: $resultsPerPage,
                        after: $cursor,
                        last: $resultsPerPage,
                        before: $reverseCursor
                ) {
                        ...BaseCollectionFragment
                        ...GenericFileFragment
                        ...MediaImageFragment
                        ...BaseMetaobjectFragment
                        ...Model3dFragment
                        ...BasePageFragment
                        ...BaseProductFragment
                        ...BaseProductVariantFragment
                        ...VideoFragment
                }
        }
`;
const AMetaobjectFragment = `#graphql
        fragment AMetaobjectFragment on Metaobject {
                ...BaseMetaobjectFragment
                # fields {
                #         ...AMetaobjectFieldFragment
                # }
        }
`;

const MetafieldFragment = `#graphql
        fragment MetafieldFragment on Metafield {
                ...AMetafieldFragment
                references (
                        first: $resultsPerPage,
                        after: $cursor,
                        last: $resultsPerPage,
                        before: $reverseCursor
                ) {
                        ...ACollectionFragment
                        ...GenericFileFragment
                        ...MediaImageFragment
                        ...AMetaobjectFragment
                        ...Model3dFragment
                        ...APageFragment
                        ...AProductFragment
                        ...AProductVariantFragment
                        ...VideoFragment
                }
        }
`;

const MetaobjectFieldFragment = `#graphql
        fragment MetaobjectFieldFragment on MetaobjectField {
                ...AMetaobjectFieldFragment
                references (
                        first: $resultsPerPage,
                        after: $cursor,
                        last: $resultsPerPage,
                        before: $reverseCursor
                ) {
                        ...ACollectionFragment
                        ...GenericFileFragment
                        ...MediaImageFragment
                        ...AMetaobjectFragment
                        ...Model3dFragment
                        ...APageFragment
                        ...AProductFragment
                        ...AProductVariantFragment
                        ...VideoFragment
                }
        }
`;

const MetaobjectFragment = `#graphql
        fragment MetaobjectFragment on Metaobject {
                ...AMetaobjectFragment
                # fields {
                #         ...MetaobjectFieldFragment
                # }
        }
`;

export {
        AMetafieldFragment,
        AMetaobjectFieldFragment,
        AMetaobjectFragment,
        BaseMetafieldFragment,
        BaseMetaobjectFieldFragment,
        BaseMetaobjectFragment,
        MetafieldFragment,
        MetaobjectFieldFragment,
        MetaobjectFragment,
        MetaobjectSEOFragment
};

