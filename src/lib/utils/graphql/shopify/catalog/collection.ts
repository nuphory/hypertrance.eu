const CollectionFragment = `#graphql
        fragment CollectionFragment on Collection {
                descriptionHtml

                handle
                id

                image {
                        ...Image
                }

                metafields(identifiers: [
                        {key: "banner", namespace: "custom"},
                        {key: "collections", namespace: "custom"},
                        {key: "feature", namespace: "custom"},
                        {key: "type", namespace: "custom"}
                ]) {
                        edges {
                                node {
                                        ...MetafieldFragment
                                }
                        }
                }

                products (
                        first: $resultsPerPage, after: $cursor,
                        last: $resultsPerPage, before: $reverseCursor,
                        reverse: $reverse,
                        sortKey: $sortKey,
                        filters: $filters
                ) {
                        edges {
                                node {
                                        ...AProductFragment
                                }
                        }
                }

                seo {
                        ...SEOFragment
                }

                title
                trackingParameters
                updatedAt
        }
`

// Simplified fragment, only including top-level fields. This is necessary to prevent Metafields from nesting too deeply.
const ACollectionFragment = `#graphql
        fragment ACollectionFragment on Collection {
                description

                handle
                id

                image {
                        ...ImageFragment
                }

                metafields(identifiers: [
                        {key: "banner", namespace: "custom"},
                        {key: "collection_type", namespace: "custom"}
                ]) {
                        edges {
                                node {
                                        ...AMetafieldFragment
                                }
                        }

                }

                products(first: 3) {
                        nodes {
                                ...AProductFragment
                        }
                }
        }
`

// TODO Custom Data (Metafields & Metaobjects) relating to Collections

export { CollectionFragment, ACollectionFragment }
