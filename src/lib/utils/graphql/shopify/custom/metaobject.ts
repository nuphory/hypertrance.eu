const AMetaobjectFragment = `#graphql
        fragment AMetaobjectFragment on Metaobject {
                handle
                id
                seo
                type
                updatedAt
        }
`

const MetaobjectFieldFragment = `#graphql
        fragment MetaobjectFieldFragment on MetaobjectField {
                key
                reference {
                        ...ACollectionFragment
                        ...GenericFileFragment
                        ...MediaImageFragment
                        ...AMetaobjectFragment
                        ...Model3dFragment
                        # ...APageFragment
                        ...AProductFragment
                        ...VideoFragment
                }
                references(first: $resultsPerPage, after: $cursor, last: $resultsPerPage, before: $reverseCursor) {
                        edges {
                                node {
                                        ...ACollectionFragment
                                        ...GenericFileFragment
                                        ...MediaImageFragment
                                        ...AMetaobjectFragment
                                        ...Model3dFragment
                                        # ...APageFragment
                                        ...AProductFragment
                                        ...VideoFragment
                                }
                        }
                }
                type
                value
        }
`

const MetaobjectFragment = `#graphql
        fragment MetaobjectFragment on Metaobject {
                fields {
                        ...MetaobjectFieldFragment
                }
                handle
                id
                seo
                type
                updatedAt
        }
`

export { MetaobjectFieldFragment, MetaobjectFragment, AMetaobjectFragment }
