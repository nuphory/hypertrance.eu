const BrandColorsFragment = `#graphql
        primary {
                background
                foreground
        }
        secondary {
                background
                foreground
        }
`

const BrandFragment = `#graphql
        colors {
                ...BrandColorsFragment
        }
        coverImage {
                ...MediaImageFragment
        }
        logo {
                ...MediaImageFragment
        }
        shortDescription
        slogan
        squareLogo {
                ...MediaImageFragment
        }
        ${BrandColorsFragment}
`

export { BrandFragment };
