const LinkFragment = `#graphql
        fragment LinkFragment on Metaobject {
                description: field(key: "description") {
                        ...BaseMetaobjectFieldFragment
                }

                external: field(key: "external") {
                        ...BaseMetaobjectFieldFragment
                }

                icon: field(key: "icon") {
                        ...BaseMetaobjectFieldFragment
                }

                icon_svg: field(key: "icon_svg") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...MediaImageFragment
                        }
                }

                title: field(key: "title") {
                        ...BaseMetaobjectFieldFragment
                }

                url: field(key: "url") {
                        ...BaseMetaobjectFieldFragment
                }
        }
`;

const AuthorFragment = `#graphql
        fragment AuthorFragment on Metaobject {
                description: field(key: "description") {
                        ...BaseMetaobjectFieldFragment
                }

                image: field(key: "image") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...MediaImageFragment
                        }
                }

                links: field(key: "links") {
                        ...BaseMetaobjectFieldFragment
                        references (
                                first: 100
                        ) {
                                nodes {
                                        ...LinkFragment
                                }
                        }
                }

                title: field(key: "title") {
                        ...BaseMetaobjectFieldFragment
                }

                url: field(key: "url") {
                        ...BaseMetaobjectFieldFragment
                }
        }
`;

export { LinkFragment, AuthorFragment };

const MetadataFragment = `#graphql
        ${LinkFragment}
        ${AuthorFragment}
`;

export default MetadataFragment;
