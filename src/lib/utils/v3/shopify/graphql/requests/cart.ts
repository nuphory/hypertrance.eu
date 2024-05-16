// Queries

import { CartFragment } from "../fragments/cart";
import SimpleTypes from "../fragments/simple-types";

const CartQuery = `#graphql
        query CartQuery ($cartId: ID!, $resultsPerPage: Int = 250) {
                cart(id: $cartId) {
                        ...CartFragment
                }
        }

        ${CartFragment}
        ${SimpleTypes}
`;

export default CartQuery;
export { CartQuery };

// Mutations

const CartCreateMutation = `#graphql
        mutation CartCreateMutation (
                $merchandiseId: ID!, $quantity: Int = 1,
                $discountCodes: [String!] = []
                $resultsPerPage: Int = 250
        ) {
                cartCreate(
                        input: {
                                lines: [{
                                        merchandiseId: $merchandiseId,
                                        quantity: $quantity
                                }],
                                discountCodes: $discountCodes
                        }
                ) {
                        cart {
                                ...CartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${CartFragment}
        ${SimpleTypes}
`;

const CartDiscountCodesUpdateMutation = `#graphql
        mutation CartDiscountCodesUpdateMutation (
                $cartId: ID!, $discountCodes: [String!] = [],

                $resultsPerPage: Int = 250
        ) {
                cartDiscountCodesUpdate(
                        cartId: $cartId, discountCodes: $discountCodes
                ) {
                        cart {
                                ...CartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${CartFragment}
        ${SimpleTypes}
`;

const CartLinesAddMutation = `#graphql
        mutation CartLinesAddMutation (
                $cartId: ID!, $lines: [CartLineInput!] = [],
                $resultsPerPage: Int = 250
        ) {
                cartLinesAdd(
                        cartId: $cartId, lines: $lines
                ) {
                        cart {
                                ...CartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${CartFragment}
        ${SimpleTypes}
`;

const CartLinesRemoveMutation = `#graphql
        mutation CartLinesRemoveMutation (
                $cartId: ID!, $lineIds: [ID!] = [],
                $resultsPerPage: Int = 250
        ) {
                cartLinesRemove(
                        cartId: $cartId, lineIds: $lineIds
                ) {
                        cart {
                                ...CartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${CartFragment}
        ${SimpleTypes}
`;

const CartLinesUpdateMutation = `#graphql
        mutation CartLinesUpdateMutation (
                $cartId: ID!, $lineId: ID!, $quantity: Int = 1,
                $resultsPerPage: Int = 250
        ) {
                cartLinesUpdate(
                        cartId: $cartId, lines: [{ id: $lineId, quantity: $quantity }]
                ) {
                        cart {
                                ...CartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${CartFragment}
        ${SimpleTypes}
`;

const CartNoteUpdateMutation = `#graphql
        mutation CartNoteUpdateMutation (
                $cartId: ID!, $note: String = "",
                $resultsPerPage: Int = 250
        ) {
                cartNoteUpdate(
                        cartId: $cartId, note: $note
                ) {
                        cart {
                                ...CartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${CartFragment}
        ${SimpleTypes}
`;

export { CartCreateMutation, CartDiscountCodesUpdateMutation, CartLinesAddMutation, CartLinesRemoveMutation, CartLinesUpdateMutation, CartNoteUpdateMutation };

