// TODO
const TestimonialFragment = `#graphql
        fragment TestimonialFragment on Metaobject {
                ...BaseMetaobjectFragment

                author: field(key: "authors") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...AuthorFragment
                        }
                }

                description: field(key: "description") {
                        ...BaseMetaobjectFieldFragment
                }

                product: field(key: "product") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...BaseProductFragment
                        }
                }

                purchase_date: field(key: "purchase_date") {
                        ...BaseMetaobjectFieldFragment
                }

                rating: field(key: "rating") {
                        ...BaseMetaobjectFieldFragment
                }

                snippet: field(key: "snippet") {
                        ...BaseMetaobjectFieldFragment
                }
        }
`;

// TODO implement this on shopify
const LicenseFragment = `#graphql
        fragment LicenseFragment on Metaobject {
                ...BaseMetaobjectFragment

                description: field(key: "description") {
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

                files: field(key: "media") {
                        ...BaseMetaobjectFieldFragment
                        references (
                                first: 100
                        ) {
                                ...GenericFileFragment
                        }
                }

                title: field(key: "title") {
                        ...BaseMetaobjectFieldFragment
                }
        }
`;

export { TestimonialFragment, LicenseFragment };
