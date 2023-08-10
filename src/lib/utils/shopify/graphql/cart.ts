import { MONEY_FRAGMENT } from './common';
import { PRODUCT_VARIANT_FRAGMENT } from './product';

export const CART_DISCOUNT_CODE_FRAGMENT = `#graphql
	fragment cartDiscountCodeFragment on CartDiscountCode {
		applicable
		code
	}
`;

export const CART_AUTOMATIC_DISCOUNT_ALLOCATION_FRAGMENT = `#graphql
	fragment cartAutomaticDiscountAllocationFragment on CartAutomaticDiscountAllocation {
		title
	}
`;
export const CART_CODE_DISCOUNT_ALLOCATION_FRAGMENT = `#graphql
	fragment cartCodeDiscountAllocationFragment on CartCodeDiscountAllocation {
		code
	}
`;
export const CART_CUSTOM_DISCOUNT_ALLOCATION_FRAGMENT = `#graphql
	fragment cartCustomDiscountAllocationFragment on CartCustomDiscountAllocation {
		title
	}
`;

export const CART_LINE_FRAGMENT = `#graphql
	fragment cartLineFragment on CartLine {
		id
		quantity
		merchandise {
			...productVariantFragment
		}
		cost {
			amountPerQuantity {
				...moneyFragment
			}
			subtotalAmount {
				...moneyFragment
			}
			totalAmount {
				...moneyFragment
			}
		}
	}
	${PRODUCT_VARIANT_FRAGMENT}
`;

export const CART_FRAGMENT = `#graphql
	fragment cartFragment on Cart {
		id
		totalQuantity
		checkoutUrl
		cost {
			totalAmount {
				...moneyFragment
			}
		}
		discountCodes {
			...cartDiscountCodeFragment
		}
		discountAllocations {
				discountedAmount {
					...moneyFragment
				}
				...cartAutomaticDiscountAllocationFragment
				...cartCodeDiscountAllocationFragment
				...cartCustomDiscountAllocationFragment
		}
		lines(first: $first) {
			nodes {
				...cartLineFragment
			}
		}
	}
	${CART_DISCOUNT_CODE_FRAGMENT}
	${CART_AUTOMATIC_DISCOUNT_ALLOCATION_FRAGMENT}
	${CART_CODE_DISCOUNT_ALLOCATION_FRAGMENT}
	${CART_CUSTOM_DISCOUNT_ALLOCATION_FRAGMENT}
	${CART_LINE_FRAGMENT}
`;

export const CART_USER_ERROR_FRAGMENT = `#graphql
	fragment cartUserErrorFragment on CartUserError {
		code
		field
		message
	}
`;

export const GetCartQuery = `#graphql
	query ($id: ID!, $first: Int = 100) {
		cart(id: $id) {
			...cartFragment
		}
	}
	${CART_FRAGMENT}
`;

export const CreateCartMutation = `#graphql
	mutation ($id: ID!, $quantity: Int = 1, $discountCodes: [String!] = [], $first: Int = 250) {
		cartCreate(input: { lines: [{ merchandiseId: $id, quantity: $quantity }], discountCodes: $discountCodes }) {
			cart {
				...cartFragment
			}
			userErrors {
				...cartUserErrorFragment
			}
		}
	}
	${CART_FRAGMENT}
	${CART_USER_ERROR_FRAGMENT}
`;

export const CartLinesAddMutation = `#graphql
	mutation ($cartId: ID!, $lines: [CartLineInput!]!, $first: Int = 250) {
		cartLinesAdd (cartId: $cartId, lines: $lines) {
			cart {
				...cartFragment
			}
			userErrors {
				...cartUserErrorFragment
			}
		}
	}
	${CART_FRAGMENT}
	${CART_USER_ERROR_FRAGMENT}
`;

export const CartLinesRemoveMutation = `#graphql
	mutation ($cartId: ID!, $lineIds: [ID!]!, $first: Int = 250) {
		cartLinesRemove (cartId: $cartId, lineIds: $lineIds) {
			cart {
				...cartFragment
			}
			userErrors {
				...cartUserErrorFragment
			}
		}
	}
	${CART_FRAGMENT}
	${CART_USER_ERROR_FRAGMENT}
`;

export const CartLinesUpdateMutation = `#graphql
	mutation ($cartId: ID!, $lines: [CartLineUpdateInput!]!, $first: Int = 250) {
		cartLinesUpdate (cartId: $cartId, lines: $lines) {
			cart {
				...cartFragment
			}
			userErrors {
				...cartUserErrorFragment
			}
		}
	}
	${CART_FRAGMENT}
	${CART_USER_ERROR_FRAGMENT}
`;

export const CartDiscountCodesUpdateMutation = `#graphql
	mutation ($cartId: ID!, $discountCodes: [String!] = [], $first: Int = 250) {
		cartDiscountCodesUpdate (cartId: $cartId, discountCodes: $discountCodes) {
			cart {
				...cartFragment
			}
			userErrors {
				...cartUserErrorFragment
			}
		}
	}
	${CART_FRAGMENT}
	${CART_USER_ERROR_FRAGMENT}
`;

export const CartNoteUpdateMutation = `#graphql
	mutation ($cartId: ID!, $note: String = "", $first: Int = 250) {
		cartNoteUpdate (cartId: $cartId, note: $note) {
			cart {
				...cartFragment
			}
			userErrors {
				...cartUserErrorFragment
			}
		}
	}
	${CART_FRAGMENT}
	${CART_USER_ERROR_FRAGMENT}
`;
