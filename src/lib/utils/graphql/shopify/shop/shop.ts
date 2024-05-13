import { BrandFragment } from "./brand"

const ShopPolicyFragment = `#graphql
        fragment ShopPolicyFragment on ShopPolicy {
                body
                handle
                id
                title
                url
        }
`

const ShopFragment = `#graphql
        fragment ShopFragment on Shop {
                brand {
                        ...BrandFragment
                }
                description
                id
                metafields(identifiers: $metafieldIdentifiers) {
                        ...MetafieldFragment
                }
                moneyFormat
                name
                paymentSettings {
                        acceptedCardBrands
                        cardVaultUrl
                        countryCode
                        currencyCode
                        enabledPresentmentCurrencies
                        shopifyPaymentsAccountId
                        supportedDigitalWallets
                }
                primaryDomain {
                        host
                        sslEnabled
                        url
                }
                privacyPolicy {
                        ...ShopPolicyFragment
                }
                refundPolicy {
                        ...ShopPolicyFragment
                }
                shippingPolicy {
                        ...ShopPolicyFragment
                }
                shipsToCountries
                subscriptionPolicy {
                        body
                        handle
                        id
                        title
                        url
                }
                termsOfService {
                        ...ShopPolicyFragment
                }
        }

        ${BrandFragment}
        ${ShopPolicyFragment}
`

// Simplified fragment, only including top-level fields. This is necessary to prevent Metafields from nesting too deeply.
const AShopFragment = `#graphql
        fragment AShopFragment on Shop {
                brand {
                        ...BrandFragment
                }
                description
                id
                name
                primaryDomain {
                        url
                }
        }

        ${BrandFragment}
`

export { ShopFragment, AShopFragment }
