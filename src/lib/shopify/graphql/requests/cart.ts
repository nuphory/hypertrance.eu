// Queries

import { ACartFragment } from '../fragments/cart';
import SimpleTypes from '../fragments/simple-types';

/**
 * query a cart by ID
 * @param {string} cartId - the cart ID
 * @param {number} first - the number of results (cart lines) to return in this query, also cascades down to merchandise fragments' connections (linked collections)
 * @param {number} last - (reverse) the number of results (cart lines) to return in this query, also cascades down to merchandise fragments' connections (linked collections)
 * @param {boolean} expansive - whether to include all possible fields in the query
 * @param {boolean} verbose - whether to include verbose (traditionally useless) fields in the query, for debugging purposes
 * @returns {string} - the query string
 */
const CartQuery = `#graphql
        query CartQuery (
                $cartId: ID!, $first: Int = 250, $last: Int,
                $expansive: Boolean = false, $verbose: Boolean = false
        ) {
                cart(id: $cartId) {
                        ...ACartFragment
                }
        }

        ${ACartFragment}
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
                $first: Int = 250, $last: Int,
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
                                ...ACartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${ACartFragment}
        ${SimpleTypes}
`;

const CartDiscountCodesUpdateMutation = `#graphql
        mutation CartDiscountCodesUpdateMutation (
                $cartId: ID!, $discountCodes: [String!] = [],

                $first: Int = 250, $last: Int,
        ) {
                cartDiscountCodesUpdate(
                        cartId: $cartId, discountCodes: $discountCodes
                ) {
                        cart {
                                ...ACartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${ACartFragment}
        ${SimpleTypes}
`;

const CartLinesAddMutation = `#graphql
        mutation CartLinesAddMutation (
                $cartId: ID!, $lines: [CartLineInput!] = [],
                $first: Int = 250, $last: Int,
        ) {
                cartLinesAdd(
                        cartId: $cartId, lines: $lines
                ) {
                        cart {
                                ...ACartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${ACartFragment}
        ${SimpleTypes}
`;

const CartLinesRemoveMutation = `#graphql
        mutation CartLinesRemoveMutation (
                $cartId: ID!, $lineIds: [ID!] = [],
                $first: Int = 250, $last: Int,
        ) {
                cartLinesRemove(
                        cartId: $cartId, lineIds: $lineIds
                ) {
                        cart {
                                ...ACartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${ACartFragment}
        ${SimpleTypes}
`;

const CartLinesUpdateMutation = `#graphql
        mutation CartLinesUpdateMutation (
                $cartId: ID!, $lineId: ID!, $quantity: Int = 1,
                $first: Int = 250, $last: Int,
        ) {
                cartLinesUpdate(
                        cartId: $cartId, lines: [{ id: $lineId, quantity: $quantity }]
                ) {
                        cart {
                                ...ACartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${ACartFragment}
        ${SimpleTypes}
`;

const CartNoteUpdateMutation = `#graphql
        mutation CartNoteUpdateMutation (
                $cartId: ID!, $note: String = "",
                $first: Int = 250, $last: Int,
        ) {
                cartNoteUpdate(
                        cartId: $cartId, note: $note
                ) {
                        cart {
                                ...ACartFragment
                        }
                        userErrors {
                                code
                                field
                                message
                        }
                }
        }

        ${ACartFragment}
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
