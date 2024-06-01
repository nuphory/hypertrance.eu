// prettier-ignore
type GQLColor = `#${string}`;

// prettier-ignore
type GQLDateTime = `${number}-${number}-${number}T${number}:${number}:${number}Z`;

// prettier-ignore
type GQLDecimal = `${number}.${number}`;

type GQLHTML = string;

// prettier-ignore
type GQLID = `gid://shopify/${string}/${number}${string}`;

type GQLInt = number;

// prettier-ignore
type GQLURL = `${'http' | 'https'}://${`${string}.${string}` | `${number}.${number}.${number}.${number}${`:${number}` | ''}`}${`/${string}${`#${string}` | ''}${`?${string}` | ''}`| ''}`;
