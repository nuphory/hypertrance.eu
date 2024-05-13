import { ProductOptionFragment } from "../catalog/product"
import { QuantityRuleFragment, UnitPriceMeasurementFragment } from "../catalog/productvariant"

const MetafieldFragment = `#graphql
        fragment MetafieldFragment on Metafield {
                createdAt
                description

                id
                key
                namespace

                parentResource {
                        # ...AArticleFragment
                        # ...ABlogFragment
                        # ...ACartFragment
                        ...ACollectionFragment
                        # ...ACompanyFragment
                        # ...ACompanyLocationFragment
                        # ...ACustomerFragment
                        # ...ALocationFragment
                        # ...AMarketFragment
                        # ...AOrderFragment
                        # ...APageFragment
                        ...AProductFragment
                        ...AProductVariantFragment
                        ...AShopFragment
                }

                references(
                        first: $resultsPerPage, after: $cursor,
                        last: $resultsPerPage, before: $reverseCursor
                ) {
                        edges {
                                node {
                                        ...ACollectionFragment
                                        ...GenericFileFragment
                                        ...MediaImageFragment
                                        ...MetaobjectFragment
                                        ...Model3dFragment
                                        # ...APageFragment
                                        ...AProductFragment
                                        ...AProductVariantFragment
                                        ...VideoFragment
                                }
                        }
                }

                type

                value
        }
`

const AMetafieldFragment = `#graphql
        fragment AMetafieldFragment on Metafield {
                createdAt
                description

                id

                key
                namespace

                references( first: 3 ) {
                        edges {
                                node {
                                        ... on Collection {
                                                description

                                                handle
                                                id

                                                image {
                                                        ...ImageFragment
                                                }

                                                products(first: 3) {
                                                        nodes {
                                                                ...AProductFragment
                                                        }
                                                }
                                        }
                                        ...GenericFileFragment
                                        ...MediaImageFragment
                                        ...MetaobjectFragment
                                        ...Model3dFragment
                                        # ...APageFragment
                                        ... on Product {
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
                                        ... on ProductVariant {
                                                availableForSale
                                                barcode

                                                compareAtPrice {
                                                        ...MoneyV2Fragment
                                                }

                                                currentlyNotInStock
                                                id
                                                image {
                                                        ...ImageFragment
                                                }

                                                metafields(identifiers: []) {
                                                        edges {
                                                                node {
                                                                        ...AMetafieldFragment
                                                                }
                                                        }
                                                }

                                                price {
                                                        ...MoneyV2Fragment
                                                }

                                                product {
                                                        ...AProductFragment
                                                }

                                                quantityAvailable
                                                # quantityPriceBreaks
                                                quantityRule {
                                                        ...QuantityRuleFragment
                                                }

                                                requiresShipping

                                                selectedOptions {
                                                        ... on SelectedOption {
                                                                name
                                                                value
                                                        }
                                                }

                                                sku

                                                # storeAvailability

                                                taxable

                                                title

                                                unitPrice {
                                                        ...MoneyV2Fragment
                                                }
                                                unitPriceMeasurement {
                                                        ...UnitPriceMeasurementFragment
                                                }

                                                weight
                                                weightUnit

                                        }
                                        ...VideoFragment
                                }
                        }
                }

                type

                value
        }
`

export { MetafieldFragment, AMetafieldFragment }
