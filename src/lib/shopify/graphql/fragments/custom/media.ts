const ArtworkFragment = `#graphql
        fragment ArtworkFragment on Metaobject {
                ...BaseMetaobjectFragment

                authors: field(key: "authors") {
                        ...BaseMetaobjectFieldFragment
                        references (
                                first: 100
                        ) {
                                nodes {
                                        ...AuthorFragment
                                }
                        }
                }

                image: field(key: "image") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...MediaImageFragment
                        }
                }

                index: field(key: "index") {
                        ...BaseMetaobjectFieldFragment
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

                media: field(key: "media") {
                        ...BaseMetaobjectFieldFragment
                        references (
                                first: 250
                        ) {
                                nodes {
                                        ...GenericFileFragment
                                }
                        }
                }

                title: field(key: "title") {
                        ...BaseMetaobjectFieldFragment
                }
        }
`;

const DemoTrackFragment = `#graphql
        fragment DemoTrackFragment on Metaobject {
                ...BaseMetaobjectFragment

                audio: field(key: "audio") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...GenericFileFragment
                        }
                }

                authors: field(key: "authors") {
                        ...BaseMetaobjectFieldFragment
                        references (
                                first: 100
                        ) {
                                nodes {
                                        ...AuthorFragment
                                }
                        }
                }

                image: field(key: "image") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...MediaImageFragment
                        }
                }

                index: field(key: "index") {
                        ...BaseMetaobjectFieldFragment
                }

                title: field(key: "title") {
                        ...BaseMetaobjectFieldFragment
                }
        }
`;

const SongFragment = `#graphql
        fragment SongFragment on Metaobject {
                ...BaseMetaobjectFragment

                audio: field(key: "audio") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...GenericFileFragment
                        }
                }

                authors: field(key: "authors") {
                        ...BaseMetaobjectFieldFragment
                        references (
                                first: 100
                        ) {
                                nodes {
                                        ...AuthorFragment
                                }
                        }
                }

                image: field(key: "image") {
                        ...BaseMetaobjectFieldFragment
                        reference {
                                ...MediaImageFragment
                        }
                }

                index: field(key: "index") {
                        ...BaseMetaobjectFieldFragment
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
        }
`;

const AlbumFragment = `#graphql
        fragment AlbumFragment on Metaobject {
                ...BaseMetaobjectFragment

                authors: field(key: "authors") {
                        ...BaseMetaobjectFieldFragment
                        references (
                                first: 100
                        ) {
                                nodes {
                                        ...AuthorFragment
                                }
                        }
                }

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

                media: field(key: "media") {
                        ...BaseMetaobjectFieldFragment
                        references (
                                first: 250
                        ) {
                                edges {
                                        node {
                                                ...SongFragment
                                                ...ArtworkFragment
                                        }
                                }
                        }
                }

                title: field(key: "title") {
                        ...BaseMetaobjectFieldFragment
                }

        }
`;

export { ArtworkFragment, DemoTrackFragment, SongFragment, AlbumFragment };

const MetaMediaFragment = `#graphql
        ${ArtworkFragment}
        ${DemoTrackFragment}
        ${SongFragment}
        ${AlbumFragment}
`;

export default MetaMediaFragment;
