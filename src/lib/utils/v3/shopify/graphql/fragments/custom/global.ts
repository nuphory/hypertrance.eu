// TODO implement this on shopify
const NotificationBarFragment = `#graphql
        fragment NotificationBarFragment on Metaobject {
                color: field(key: "color") {
                        ...BaseMetaobjectFieldFragment
                }

                description: field(key: "description") {
                        ...BaseMetaobjectFieldFragment
                }

                dismissible: field(key: "dismissible") {
                        ...BaseMetaobjectFieldFragment
                }

                end_date: field(key: "end_date") {
                        ...BaseMetaobjectFieldFragment
                }

                start_date: field(key: "start_date") {
                        ...BaseMetaobjectFieldFragment
                }

                title: field(key: "title") {
                        ...BaseMetaobjectFieldFragment
                }

                url: field(key: "url") {
                        ...BaseMetaobjectFieldFragment
                }
        }
`;

export { NotificationBarFragment };
