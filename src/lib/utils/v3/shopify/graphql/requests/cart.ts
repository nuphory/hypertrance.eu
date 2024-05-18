// Queries

import { CartFragment } from '../fragments/cart';
import SimpleTypes from '../fragments/simple-types';

/**
 * query a cart by ID
 * @param {string} cartId - the cart ID
 * @param {number} resultsPerPage - the number of results (cart lines) to return in this query, also cascades down to merchandise fragments' connections (linked collections)
 * @param {boolean} expansive - whether to include all possible fields in the query
 * @param {boolean} verbose - whether to include verbose (traditionally useless) fields in the query, for debugging purposes
 * @returns {string} - the query string
 */
const CartQuery = `#graphql
        query CartQuery (
                $cartId: ID!, $resultsPerPage: Int = 250,
                $expansive: Boolean = false, $verbose: Boolean = false
        ) {
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

/**
 * create a cart with provided input.
 * @param {object} input - the cart input object
 */
const CartCreateMutation = `#graphql
        mutation CartCreateMutation (
                $input: CartInput
                $resultsPerPage: Int = 250
                $expansive: Boolean = false, $verbose: Boolean = false,
        ) {
                cartCreate(
                        input: $input
                        # {
                        #         lines: [{
                        #                 merchandiseId: $merchandiseId,
                        #                 quantity: $quantity
                        #         }],
                        #         discountCodes: $discountCodes
                        # }
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

export {
	CartCreateMutation,
	CartDiscountCodesUpdateMutation,
	CartLinesAddMutation,
	CartLinesRemoveMutation,
	CartLinesUpdateMutation,
	CartNoteUpdateMutation
};
