const ProductOptionFragment = `#graphql
        fragment ProductOptionFragment on ProductOption {
                id
                name
                values
        }
`;

const BaseProductVariantFragment = `#graphql
        fragment BaseProductVariantFragment on ProductVariant {
                availableForSale

                barcode @include(if: $expansive)

                compareAtPrice {
                        ...MoneyV2Fragment
                }

                currentlyNotInStock

                id

                image {
                        ...ImageFragment
                }

                price {
                        ...MoneyV2Fragment
                }

                quantityAvailable

                quantityRule {
                        increment
                        maximum
                        minimum
                }

                selectedOptions {
                        name
                        value
                }

                sku @include(if: $expansive)

                taxable

                title

                weight
                weightUnit
        }
`;

const BaseProductFragment = `#graphql
        fragment BaseProductFragment on Product {
                availableForSale

                createdAt @include(if: $expansive)

                compareAtPriceRange {
                        maxVariantPrice @include(if: $expansive) {
                                ...MoneyV2Fragment
                        }
                        minVariantPrice {
                                ...MoneyV2Fragment
                        }
                }

                description

                featuredImage {
                        ...ImageFragment
                }

                handle
                id

                images(first: 50) {
                        nodes {
                                ...ImageFragment
                        }
                }

                isGiftCard

                tagline: metafield(namespace: "custom", key: "tagline") {
                        ...BaseMetafieldFragment
                }

                options {
                        ...ProductOptionFragment
                }

                priceRange {
                        maxVariantPrice @include(if: $expansive){
                                ...MoneyV2Fragment
                        }
                        minVariantPrice {
                                ...MoneyV2Fragment
                        }
                }

                productType
                publishedAt @include(if: $expansive)

                seo {
                        ...SEOFragment
                }

                tags
                title

                totalInventory
                trackingParameters @include (if: $expansive)

                updatedAt

                variantBySelectedOptions(
                        selectedOptions: $selectedOptions,
                        ignoreUnknownOptions: true,
                        caseInsensitiveMatch: true
                ) {
                        ...BaseProductVariantFragment
                }

                variants(first: 1) {
                        nodes {
                                ...BaseProductVariantFragment
                        }
                }

                vendor
        }
`;

const AProductVariantFragment = `#graphql
        fragment AProductVariantFragment on ProductVariant {
                ...BaseProductVariantFragment
                product {
                        ...BaseProductFragment
                }
                quantityPriceBreaks (
                        first: 50
                ) {
                        edges {
                                node {
                                        minimumQuantity
                                        price {
                                                ...MoneyV2Fragment
                                        }
                                }
                        }

                }
        }
`;

const AProductFragment = `#graphql
        fragment AProductFragment on Product {
                ...BaseProductFragment
                descriptionHtml @include(if: $expansive)

                collections(
                        first: $first, after: $cursor,
                        last: $last, before: $reverseCursor,
                        reverse: $reverse,
                ) {
                        edges {
                                node {
                                        ...BaseCollectionFragment
                                }
                        }
                }

                variantBySelectedOptions(
                        selectedOptions: $selectedOptions,
                        ignoreUnknownOptions: true,
                        caseInsensitiveMatch: true
                ) {
                        ...AProductVariantFragment
                }
        }

`;

// Here for possible future expansion (metafields etc.)
const ProductVariantFragment = `#graphql
        fragment ProductVariantFragment on ProductVariant {
                ...AProductVariantFragment
        }
`;

const ProductFragment = `#graphql
        fragment ProductFragment on Product {
                ...AProductFragment

                samples: metafield(namespace: "custom", key: "samples") {
                        ...BaseMetafieldFragment

                        references (
                                first: 50
                        ) {
                                edges {
                                        node {
                                                ...ArtworkFragment
                                                ...DemoTrackFragment
                                                ...SongFragment
                                        }
                                }
                        }
                }

                testimonials: metafield(namespace: "custom", key: "testimonials") {
                        ...BaseMetafieldFragment

                        references (
                                first: 15
                        ) {
                                edges {
                                        node {
                                                ...TestimonialFragment
                                        }
                                }
                        }
                }

                licenses: metafield(namespace: "custom", key: "license_agreements") {
                        ...BaseMetafieldFragment

                        references (
                                first: 50
                        ) {
                                nodes {
                                        ...LicenseFragment
                                }
                        }
                }
        }
`;

export {
	ProductFragment,
	ProductVariantFragment,
	AProductFragment,
	AProductVariantFragment,
	BaseProductFragment,
	BaseProductVariantFragment,
	ProductOptionFragment
};
