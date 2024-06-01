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

const BaseShopFragment = `#graphql
        fragment BaseShopFragment on Shop {
                brand {
                        ...BrandFragment
                }
                description
                id
                name
                primaryDomain {
                        host @include(if: $expansive)
                        sslEnabled @include(if: $expansive)
                        url
                }
        }

        ${BrandFragment}
`

const ShopFragment = `#graphql
        fragment ShopFragment on Shop {
                ...BaseShopFragment

                metafields(identifiers: $metafieldIdentifiers) @include (if: $expansive) {
                        ...MetafieldFragment
                }
                moneyFormat

                paymentSettings @include (if: $expansive) {
                        acceptedCardBrands
                        cardVaultUrl
                        countryCode
                        currencyCode
                        enabledPresentmentCurrencies
                        shopifyPaymentsAccountId
                        supportedDigitalWallets
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

        ${BaseShopFragment}
        ${ShopPolicyFragment}
`



export { ShopFragment, BaseShopFragment }
