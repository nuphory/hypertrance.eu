const QuantityRuleFragment = `#graphql
        fragment QuantityRuleFragment on QuantityRule {
                increment
                maximum
                minimum
        }
`

const UnitPriceMeasurementFragment = `#graphql
        fragment UnitPriceMeasurementFragment on UnitPriceMeasurement {
                measuredType
                quantityUnit
                quantityValue
                referenceUnit
                referenceValue
        }
`

const ProductVariantFragment = `#graphql
        fragment ProductVariantFragment on ProductVariant {
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
                                        ...MetafieldFragment
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
`

export { ProductVariantFragment, QuantityRuleFragment, UnitPriceMeasurementFragment }
