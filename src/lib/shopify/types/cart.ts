type CartLineInput = {
        merchandiseId: string
}

type CartInput = {
        lines: CartLineInput[]
        discountCodes: string[]
}
