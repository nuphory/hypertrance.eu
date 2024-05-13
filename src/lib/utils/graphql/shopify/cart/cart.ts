

const CartBuyerIdentityFragment = `#graphql
        fragment CartBuyerIdentityFragment on CartBuyerIdentity {
                countryCode

                # customer {
                #         ...CustomerFragment
                # }

                # deliveryAddressPreferences {
                #         ...MailingAddressFragment
                # }

                email
                phone

                # purchasingCompany {
                #         ...PurchasingCompanyFragment
                # }

                walletPreferences
        }
`

const CartCostFragment = `#graphql
        fragment CartCostFragment on CartCost {
                checkoutChargeAmount {
                        ...MoneyV2Fragment
                }

                subtotalAmount {
                        ...MoneyV2Fragment
                }
                subtotalAmountEstimated

                totalAmount {
                        ...MoneyV2Fragment
                }
                totalAmountEstimated

                totalDutyAmount {
                        ...MoneyV2Fragment
                }
                totalDutyAmountEstimated

                totalTaxAmount {
                        ...MoneyV2Fragment
                }
                totalTaxAmountEstimated
        }
`

const CartAutomaticDiscountAllocationFragment = `#graphql
        fragment CartAutomaticDiscountAllocationFragment on CartAutomaticDiscountAllocation {
                discountedAmount {
                        ...MoneyV2Fragment
                }
                title
        }
`

const CartCodeDiscountAllocationFragment = `#graphql
        fragment CartCodeDiscountAllocationFragment on CartCodeDiscountAllocation {
                code
                discountedAmount {
                        ...MoneyV2Fragment
                }
        }
`

const CartCustomDiscountAllocationFragment = `#graphql
        fragment CartCustomDiscountAllocationFragment on CartCustomDiscountAllocation {
                discountedAmount {
                        ...MoneyV2Fragment
                }
                title
        }
`

const CartDiscountCodeFragment = `#graphql
        fragment CartDiscountCodeFragment on CartDiscountCode {
                applicable
                code
        }
`

const CartLineCostFragment = `#graphql
        fragment CartLineCostFragment on CartLineCost {
                amountPerQuantity {
                        ...MoneyV2Fragment
                }
                compareAtAmountPerQuantity {
                        ...MoneyV2Fragment
                }

                subtotalAmount {
                        ...MoneyV2Fragment
                }

                totalAmount {
                        ...MoneyV2Fragment
                }
        }
`

const BaseCartLineFragment = `#graphql
        fragment BaseCartLineFragment on BaseCartLine {
                attributes {
                        key
                        value
                }
                cost {
                        ...CartLineCostFragment
                }

                discountAllocations {
                        ...CartAutomaticDiscountAllocationFragment
                        ...CartCodeDiscountAllocationFragment
                        ...CartCustomDiscountAllocationFragment
                }

                id

                merchandise {
                        ...ProductVariantFragment
                }

                quantity
        }

`

const CartFragment = `#graphql
        fragment CartFragment on Cart {
                attributes {
                        key
                        value
                }

                buyerIdentity {
                        ...CartBuyerIdentityFragment
                }

                checkoutUrl

                cost {
                        ...CartCostFragment
                }

                createdAt

                discountAllocations {
                        ...CartAutomaticDiscountAllocationFragment
                        ...CartCodeDiscountAllocationFragment
                        ...CartCustomDiscountAllocationFragment
                }

                discountCodes {
                        ...CartDiscountCodeFragment
                }

                id

                lines(
                        first: $resultsPerPage, after: $cursor,
                        last: $resultsPerPage, before: $reverseCursor,
                        reverse: $reverse
                ) {
                        edges {
                                node {
                                        id
                                        quantity
                                        title
                                        variant {
                                                ...ProductVariantFragment
                                        }
                                }
                        }
                }

                metafields(identifiers: []) {
                        edges {
                                node {
                                        ...AMetafieldFragment
                                }
                        }
                }

                note
                totalQuantity
                updatedAt
        }

        ${CartBuyerIdentityFragment}
        ${CartCostFragment}
        ${CartAutomaticDiscountAllocationFragment}
        ${CartCodeDiscountAllocationFragment}
        ${CartCustomDiscountAllocationFragment}
        ${CartDiscountCodeFragment}
`
