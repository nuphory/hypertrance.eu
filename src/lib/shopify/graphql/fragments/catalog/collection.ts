const BaseCollectionFragment = `#graphql
        fragment BaseCollectionFragment on Collection {
                description
                handle
                id

                image {
                        ...ImageFragment
                }

                banner: metafield(namespace: "custom", key: "banner") {
                        ...BaseMetafieldFragment
                        reference {
                                ...MediaImageFragment
                                ...VideoFragment
                        }
                }

                type: metafield(namespace: "custom", key: "type") {
                        ...BaseMetafieldFragment
                }

                seo {
                        ...SEOFragment
                }

                title

                trackingParameters @include (if: $expansive)

                updatedAt

                vendor: metafield(namespace: "custom", key: "vendor") {
                        ...BaseMetafieldFragment
                }
        }
`;

const ACollectionFragment = `#graphql
        fragment ACollectionFragment on Collection {
                ...BaseCollectionFragment
                descriptionHtml @include (if: $expansive)

                collections: metafield(namespace: "custom", key: "collections") {
                        ...BaseMetafieldFragment
                        references (
                                first: 3
                        ) {
                                edges {
                                        node {
                                                ...BaseCollectionFragment
                                        }
                                }
                        }
                }

                products (
                        first: 3,
                        filters: $filters
                ) {
                        edges {
                                node {
                                        ...BaseProductFragment
                                }
                        }
                }
        }
`;

const CollectionFragment = `#graphql
        fragment CollectionFragment on Collection {
                ...ACollectionFragment

                album: metafield(namespace: "custom", key: "album") {
                        ...BaseMetafieldFragment

                        reference {
                                ...AlbumFragment
                        }
                }

                collections: metafield(namespace: "custom", key: "collections") {
                        ...BaseMetafieldFragment
                        references (
                                first: $first, after: $cursor,
                                last: $last, before: $reverseCursor
                        ) {
                                edges {
                                        node {
                                                ...ACollectionFragment
                                        }
                                }
                        }
                }

                feature: metafield(namespace: "custom", key: "feature") {
                        ...BaseMetafieldFragment
                        reference {
                                ...MediaImageFragment
                                ...VideoFragment
                        }
                }

                products (
                        first: $first, after: $cursor,
                        last: $last, before: $reverseCursor,
                        reverse: $reverse,
                        sortKey: $productSortKey,
                        filters: $filters
                ) {
                        edges {
                                node {
                                        ...AProductFragment
                                }
                        }
                }
        }
`;

export { CollectionFragment, ACollectionFragment, BaseCollectionFragment };

const CollectionFragments = `
        ${BaseCollectionFragment}
        ${ACollectionFragment}
        ${CollectionFragment}
`;

export default CollectionFragments;
