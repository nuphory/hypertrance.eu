const PageFragment = `#graphql
        fragment PageFragment on Page {
                body
                createdAt
                handle
                id
                metafields(identifiers: $metafieldIdentifiers) {
                        edges {
                                node {
                                        ...MetafieldFragment
                                }
                        }
                }
                title
                body
                url
                image {
                        ...ImageFragment
                }
        }
`
