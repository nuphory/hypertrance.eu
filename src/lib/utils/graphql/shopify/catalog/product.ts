const ProductOptionFragment = `#graphql
        fragment ProductOptionFragment on ProductOption {
                id
                name
                values
        }
`

const ProductFragment = `#graphql
        fragment ProductFragment on Product {
                availableForSale

                createdAt

                collections(
                        first: $resultsPerPage, after: $cursor,
                        last: $resultsPerPage, before: $reverseCursor,
                        reverse: $reverse,
                ) {
                        edges {
                                node {
                                        ...ACollectionFragment
                                }
                        }
                }

                descriptionHtml

                images(first: 25) {
                        edges {
                                node {
                                        ...ImageFragment
                                }
                        }
                }

                handle
                id

                media(first: 30) {
                        edges {
                                node {
                                        ...MediaImageFragment
                                        ...Model3dFragment
                                        ...VideoFragment
                                }
                        }
                }

                isGiftCard

                metafields(identifiers: [
                        {key: "license_agreements", namespace: "custom"},
                        {key: "samples", namespace: "custom"},
                        {key: "tagline", namespace: "custom"},
                        {key: "testimonials", namespace: "custom"},
                ]) {
                        edges {
                                node {
                                        ...MetafieldFragment
                                }
                        }
                }

                options {
                        ...ProductOptionFragment
                }

                publishedAt
                requiresSellingPlan

                seo {
                        ...SEOFragment
                }

                tags
                title
                totalInventory
                updatedAt

                variantBySelectedOptions(
                        selectedOptions: $selectedOptions,
                        ignoreUnknownOptions: true,
                        caseInsensitiveMatch: true
                ) {
                        ...ProductVariantFragment
                }

                variants(
                        first: $resultsPerPage, after: $cursor,
                        last: $resultsPerPage, before: $reverseCursor,
                        reverse: $reverse,
                        sortKey: $sortKey
                ) {
                        edges {
                                node {
                                        ...ProductVariantFragment
                                }
                        }
                }

                vendor
        }
`

// Simplified fragment, only including top-level fields. This is necessary to prevent Metafields from nesting too deeply.
const AProductFragment = `#graphql
        fragment AProductFragment on Product {
                availableForSale

                compareAtPriceRange {
                        maxVariantPrice {
                                ...MoneyV2Fragment
                        }
                        minVariantPrice {
                                ...MoneyV2Fragment
                        }
                }

                createdAt
                description

                handle
                id

                media(first: 3) {
                        edges {
                                node {
                                        ...MediaImageFragment
                                        ...Model3dFragment
                                        ...VideoFragment
                                }
                        }
                }

                images(first: 1) {
                        edges {
                                node {
                                        ...ImageFragment
                                }
                        }
                }

                isGiftCard

                metafields(identifiers: [
                        {key: "tagline", namespace: "custom"},
                ]) {
                        edges {
                                node {
                                        ...AMetafieldFragment
                                }
                        }
                }

                options {
                        ...ProductOptionFragment
                }

                priceRange {
                        maxVariantPrice {
                                ...MoneyV2Fragment
                        }
                        minVariantPrice {
                                ...MoneyV2Fragment
                        }
                }

                productType
                publishedAt
                requiresSellingPlan

                seo {
                        ...SEOFragment
                }

                tags
                title
                updatedAt

                variantBySelectedOptions(
                        selectedOptions: $selectedOptions,
                        ignoreUnknownOptions: true,
                        caseInsensitiveMatch: true
                ) {
                        ...ProductVariantFragment
                }

                vendor
        }
`

export { AProductFragment, ProductFragment, ProductOptionFragment }

