const CartAutomaticDiscountAllocationFragment = `#graphql
        fragment CartAutomaticDiscountAllocationFragment on CartAutomaticDiscountAllocation {
                discountedAmount {
                        ...MoneyV2Fragment
                }
                title
        }
`;

const CartCodeDiscountAllocationFragment = `#graphql
        fragment CartCodeDiscountAllocationFragment on CartCodeDiscountAllocation {
                code
                discountedAmount {
                        ...MoneyV2Fragment
                }
        }
`;

const CartCustomDiscountAllocationFragment = `#graphql
        fragment CartCustomDiscountAllocationFragment on CartCustomDiscountAllocation {
                discountedAmount {
                        ...MoneyV2Fragment
                }
                title
        }
`;

const BaseCartLineFragment = `#graphql
        fragment BaseCartLineFragment on BaseCartLine {
                attributes {
                        key
                        value
                }
                cost {
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
                discountAllocations {
                        ...CartAutomaticDiscountAllocationFragment
                        ...CartCodeDiscountAllocationFragment
                        ...CartCustomDiscountAllocationFragment
                }
                id
                merchandise {
                        ...BaseProductVariantFragment
                }
                quantity
        }
`;

const BaseCartFragment = `#graphql
        fragment BaseCartFragment on Cart {
                checkoutUrl

                cost {
                        checkoutChargeAmount @include (if: $expansive) {
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

                        totalDutyAmount @include (if: $expansive) {
                                ...MoneyV2Fragment
                        }
                        totalDutyAmountEstimated

                        totalTaxAmount @include (if: $expansive) {
                                ...MoneyV2Fragment
                        }
                        totalTaxAmountEstimated
                }

                createdAt @include (if: $verbose)

                discountAllocations {
                        ...CartAutomaticDiscountAllocationFragment
                        ...CartCodeDiscountAllocationFragment
                        ...CartCustomDiscountAllocationFragment
                }

                id

                totalQuantity

                updatedAt @include (if: $verbose)
        }
`;

const CartFragment = `#graphql
        fragment ACartFragment on Cart {
                ...BaseCartFragment

                attributes {
                        key
                        value
                }

                discountCodes {
                        applicable
                        code
                }

                lines (
                        first: $resultsPerPage, after: $cursor, before: $reverseCursor, last: $resultsPerPage,
                        reverse: $reverse
                ) {
                        nodes {
                                ...BaseCartLineFragment
                                ... on ComponentizableCartLine {
                                        lineComponents {
                                                ...BaseCartLineFragment
                                        }
                                }
                        }
                }

                note
        }

        ${BaseCartFragment}
        ${BaseCartLineFragment}
        ${CartAutomaticDiscountAllocationFragment}
        ${CartCodeDiscountAllocationFragment}
        ${CartCustomDiscountAllocationFragment}
`;

export { CartFragment, BaseCartFragment, BaseCartLineFragment };
