const ExternalVideoFragment = `#graphql
        fragment ExternalVideoFragment on ExternalVideo {
                alt
                embedUrl
                host
                id
                mediaContentType
                originUrl
                previewImage {
                        ...ImageFragment
                }
        }
`;

const GenericFileFragment = `#graphql
        fragment GenericFileFragment on GenericFile {
                alt
                id
                mimeType
                originalFileSize
                previewImage {
                        ...ImageFragment
                }
                url
        }
`;

const ImageFragment = `#graphql
        fragment ImageFragment on Image {
                url (transform: {maxWidth: 3840, preferredContentType: WEBP})
                height
                width
                altText
        }
`;

const MediaImageFragment = `#graphql
        fragment MediaImageFragment on MediaImage {
                alt
                id
                image {
                        ...ImageFragment
                }
                mediaContentType
                previewImage {
                        ...ImageFragment
                }
        }
`;

const Model3dSourceFragment = `#graphql
        fragment Model3dSourceFragment on Model3dSource {
                filesize
                format
                mimeType
                url
        }
`;

const Model3dFragment = `#graphql
        fragment Model3dFragment on Model3d {
                alt
                id
                mediaContentType
                previewImage {
                        ...ImageFragment
                }
                sources {
                        ...Model3dSourceFragment
                }
        }
        ${Model3dSourceFragment}
`;

const MoneyV2Fragment = `#graphql
        fragment MoneyV2Fragment on MoneyV2 {
                amount
                currencyCode
        }
`;

const SEOFragment = `#graphql
        fragment SEOFragment on SEO {
                description
                title
        }
`;

const VideoFragment = `#graphql
        fragment VideoFragment on Video {
                alt
                id
                mediaContentType
                previewImage {
                        ...ImageFragment
                }
                sources {
                        format
                        height
                        mimeType
                        url
                        width
                }
        }

`;

const PageInfoFragment = `#graphql
        fragment PageInfoFragment on PageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
        }
`;

export {
	ExternalVideoFragment,
	GenericFileFragment,
	ImageFragment,
	MediaImageFragment,
	Model3dFragment,
	MoneyV2Fragment,
	SEOFragment,
	VideoFragment,
	PageInfoFragment
};

const SimpleTypes = `#graphql
        ${ExternalVideoFragment}
        ${GenericFileFragment}
        ${ImageFragment}
        ${MediaImageFragment}
        ${Model3dFragment}
        ${MoneyV2Fragment}
        ${SEOFragment}
        ${VideoFragment}
        ${PageInfoFragment}
`;

export default SimpleTypes;
