/* eslint-disable @typescript-eslint/no-var-requires */
const { prefersDark, prefersLight, default: themes, canHover } = require('@mia-cx/tailwindcss-themes');

const tailwind_colors = require('tailwindcss/colors');

const custom_colors = {
	hypertrance: {
		// 100: '#cae1ee',
		100: 'rgba(202, 225, 238, <alpha-value>)',
		200: '',
		300: '',
		400: '',
		// 500: '#19336F',
		DEFAULT: 'rgba(25, 51, 111, <alpha-value>)',
		500: 'rgba(25, 51, 111, <alpha-value>)',
		600: '',
		// 700: '#272A3C',
		700: 'rgba(39, 42, 60, <alpha-value>)',
		// 800: '#061327',
		800: 'rgba(6, 19, 39, <alpha-value>)',
		// 900: '#12131A',
		900: 'rgba(18, 19, 26, <alpha-value>)'
		// primary: '#cae1ee',
		// secondary: '#12131a',
		// tertiary: '#061327',
		// quaternary: '#272a3c',
		// accent: '#19336f'
	},

	hyperblue: {
		DEFAULT: 'rgba(51, 153, 255, <alpha-value>)',
		50: 'rgba(230, 242, 255, <alpha-value>)',
		100: 'rgba(204, 230, 255, <alpha-value>)',
		150: 'rgba(179, 217, 255, <alpha-value>)',
		200: 'rgba(153, 204, 255, <alpha-value>)',
		250: 'rgba(128, 191, 255, <alpha-value>)',
		300: 'rgba(102, 179, 255, <alpha-value>)',
		350: 'rgba(77, 166, 255, <alpha-value>)',
		400: 'rgba(51, 153, 255, <alpha-value>)',
		450: 'rgba(26, 140, 255, <alpha-value>)',
		500: 'rgba(0, 128, 255, <alpha-value>)',
		550: 'rgba(0, 115, 230, <alpha-value>)',
		600: 'rgba(0, 102, 204, <alpha-value>)',
		650: 'rgba(0 ,89, 179, <alpha-value>)',
		700: 'rgba(0 ,77, 153, <alpha-value>)',
		750: 'rgba(0 ,64, 128, <alpha-value>)',
		800: 'rgba(0 ,50, 102, <alpha-value>)',
		850: 'rgba( 0,38 ,77, <alpha-value>)',
		900: 'rgba( 0,26 ,51, <alpha-value>)',
		950: 'rgba( 0,13 ,26, <alpha-value>)'
	}
};

const colors = {
	...custom_colors,
	...tailwind_colors
};

// Color Schemes
const color_scheme = {
	...custom_colors,

	dark: {
		DEFAULT: colors.zinc[300],

		background: {
			DEFAULT: colors.zinc[900],

			primary: {
				DEFAULT: colors.hypertrance[900],

				side: colors.hypertrance[800],
				island: colors.hypertrance[700]
			}
		},

		border: {
			DEFAULT: colors.white,

			// hover: colors.white,
			// active: colors.white

			primary: {
				DEFAULT: colors.hypertrance[100],

				hover: colors.hypertrance[800],
				active: colors.hypertrance[900]
			}
		},

		button: {
			DEFAULT: colors.white,

			// hover: colors.white,
			// active: colors.white

			primary: {
				DEFAULT: colors.hypertrance[100],

				hover: colors.hypertrance[800],
				active: colors.hypertrance[900]
			}
		},

		link: {
			DEFAULT: colors.white,

			hover: colors.white,
			active: colors.white
		},

		information: colors.zinc[300],
		// debug: colors.zinc[300] / 65,
		success: colors.green[400],
		warning: colors.amber[400],
		error: colors.red[400]
	}

	// TODO add light theme
	// light: { }
};

const TRANSITION_DURATION = '400ms';

const transition_properties = {
	colors: [
		'background-color',
		'border-color',
		'box-shadow',
		'color',
		'fill',
		'opacity',
		'outline-color',
		'stroke',
		'text-decoration-color'
	],
	sizes: [
		'font-size',
		'height',
		'inset',
		'min-height',
		'min-width',
		'max-height',
		'max-width',
		'margin',
		'padding',
		'transform',
		'width'
	]
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,md,mdx,svx}'],

	darkMode: 'false',
	theme: {
		backgroundColor: {
			dark: {
				...color_scheme.dark.background,

				button: {
					...color_scheme.dark.button
				}
			},

			// TODO add light theme
			// light: {
			// 	...color_scheme.light.background,

			// 	button: {
			// 		...color_scheme.light.button
			// 	}
			// },

			other: {
				...tailwind_colors,
				...color_scheme
			}
		},
		borderColor: {
			dark: {
				...color_scheme.dark.border
			},

			// TODO add light theme
			// light: {
			// 	...color_scheme.light.border,
			// }

			other: {
				...tailwind_colors,
				...color_scheme
			}
		},
		ringColor: {
			dark: {
				...color_scheme.dark.border
			},

			// TODO add light theme
			// light: {
			// 	...color_scheme.light.border,
			// }

			other: {
				...tailwind_colors,
				...color_scheme
			}
		},

		ringOffsetColor: {
			dark: {
				...color_scheme.dark.border
			},

			// TODO add light theme
			// light: {
			// 	...color_scheme.light.border,
			// }

			other: {
				...tailwind_colors,
				...color_scheme
			}
		},

		// margin: {},

		// fontWeight: {},

		transitionDuration: {
			default: TRANSITION_DURATION,

			fast: TRANSITION_DURATION / 2,
			slow: TRANSITION_DURATION * 2,
			none: 0
		},

		transitionProperty: {
			colors: transition_properties.colors.join(', '),
			sizes: transition_properties.sizes.join(', '),

			easy: Object.values(transition_properties)
				.map((v) => v.join(', '))
				.join(', ')
		},

		extend: {
			colors: color_scheme,

			backdropBrightness: {
				DEFAULT: '0.5'
			},

			backgroundSize: {
				button: '300%'
			},

			borderRadius: {
				xxs: '0.05rem',
				xs: '0.125rem',
				sm: '0.25rem',
				md: '0.5rem',
				lg: '1rem',
				xl: '1.5rem',
				xxl: '2.5rem',
				xxxl: '4rem',
				pill: '100em',
				circle: '50%'
			},

			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem'
				}
			},

			fontFamily: {
				// comsat: ['Comsat', 'sans-serif'],
				// 'comsat-navy': ['Comsat Navy', 'sans-serif'],
				montserrat: ['Montserrat, sans-serif'],
				// inter: ['Inter', 'sans-serif'],
				michroma: ['Michroma, Montserrat, sans-serif'],
				suissnord: ['Suissnord, Montserrat, sans-serif']
				// yeysk: ['Yeysk', 'sans-serif']
			},

			fontSize: {
				hero: '4.25rem',
				display: '2.5rem',

				primary: '2rem',
				secondary: '1.6rem',
				tertiary: '1.25rem',

				heading: '1.125rem',

				base: '1rem',

				subheading: '0.875rem',
				overline: '0.925rem'
			},

			fontWeight: {
				'normal-hero': 400,
				'normal-display': 400,
				'normal-primary': 400,
				'normal-secondary': 400,
				'normal-tertiary': 400,
				'normal-heading': 600,
				'normal-base': 400,
				'normal-subheading': 400,
				'normal-overline': 400,

				'bold-hero': 700,
				'bold-display': 700,
				'bold-primary': 700,
				'bold-secondary': 600,
				'bold-tertiary': 600,
				'bold-heading': 700,
				'bold-base': 600,
				'bold-subheading': 600,
				'bold-overline': 600
			},

			height: {
				'screen-dynamic': ['100vh', '100dvh'],
				'screen-small': ['100vh', '100svh'],
				'screen-large': ['100vh', '100lvh']
			},

			letterSpacing: {
				suissnord: '0.075em',
				'suissnord-display': '0.025em',
				'suissnord-heading': '0.05em',
				'suissnord-overline': '0.15em',

				michroma: '0.05em',
				'michroma-display': '-0.0125em',
				'michroma-heading': '0.0125em',
				'michroma-overline': '0.15em'
			},

			lineHeight: {
				suissnord: '0.925',
				'suissnord-display': '0.87',
				'suissnord-heading': '1.125',
				'suissnord-overline': '1.125',

				michroma: '0.925',
				'michroma-display': '1.3',
				'michroma-heading': '1.125',
				'michroma-overline': '1.125'
			},

			margin: {
				xxs: '0.125rem',
				xs: '0.25rem',
				sm: '0.5rem',
				md: '0.75rem',
				lg: '1rem',
				xl: '1.5rem',
				xxl: '2.5rem',
				xxxl: '4rem'
			},

			maxHeight: {
				'screen-dynamic': ['100vh', '100dvh'],
				'screen-small': ['100vh', '100svh'],
				'screen-large': ['100vh', '100lvh']
			},

			maxWidth: {
				'screen-dynamic': ['100vw', '100dvw'],
				'screen-small': ['100vw', '100svw'],
				'screen-large': ['100vw', '100lvw']
			},

			minHeight: {
				'screen-dynamic': ['100vh', '100dvh'],
				'screen-small': ['100vh', '100svh'],
				'screen-large': ['100vh', '100lvh']
			},

			minWidth: {
				'screen-dynamic': ['100vw', '100dvw'],
				'screen-small': ['100vw', '100svw'],
				'screen-large': ['100vw', '100lvw']
			},

			padding: {
				xxs: '0.125rem',
				xs: '0.25rem',
				sm: '0.5rem',
				md: '0.75rem',
				lg: '1rem',
				xl: '1.5rem',
				xxl: '2.5rem',
				xxxl: '4rem'
			},

			space: {
				xxs: '0.125rem',
				xs: '0.25rem',
				sm: '0.5rem',
				md: '0.75rem',
				lg: '1rem',
				xl: '1.5rem',
				xxl: '2.5rem',
				xxxl: '4rem'
			},

			spacing: {
				xxs: '0.875rem',
				xs: '1rem',
				sm: '1.25rem',
				md: '1.5rem',
				lg: '2rem',
				xl: '2.5rem',
				xxl: '4rem',
				xxxl: '6rem'
			},

			width: {
				'screen-dynamic': ['100vw', '100dvw'],
				'screen-small': ['100vw', '100svw'],
				'screen-large': ['100vw', '100lvw']
			}
		}
	},

	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('tailwind-perspective'),
		require('tailwindcss-logical'),

		// Color Schemes
		themes({
			themes: {
				dark: {
					selectors: '[data-theme="dark"]',
					mediaQuery: prefersDark
				},
				light: {
					selectors: '[data-theme="light"]',
					mediaQuery: prefersLight
				}
			},
			baseSelector: '*',
			fallback: 'dark'
		}),

		// Responsive Themes
		themes({
			themes: {
				'can-hover': {
					mediaQuery: canHover
				},
			}
		})
		// // Responsive Themes
		// themeVariants({
		// 	group: 'responsive',
		// 	themes: {
		// 		// Responsiveness
		// 		'can-hover': {
		// 			mediaQuery: canAnyHover
		// 		},
		// 		'no-hover': {
		// 			mediaQuery: noAnyHover
		// 		},
		// 		landscape: {
		// 			mediaQuery: landscape
		// 		},
		// 		portrait: {
		// 			mediaQuery: portrait
		// 		},

		// 		'update-fast': {
		// 			mediaQuery: '@media (update: fast)'
		// 		},
		// 		'update-slow': {
		// 			mediaQuery: '@media (update: slow)'
		// 		},
		// 		'update-none': {
		// 			mediaQuery: '@media (update: none)'
		// 		},

		// 		// Print
		// 		print: {
		// 			selector: '[data-print="true"]',
		// 			mediaQuery: print
		// 		}
		// 	}
		// }),

		// // Accessibility Themes
		// themeVariants({
		// 	group: 'accessibility',
		// 	themes: {
		// 		// Accessibility
		// 		'motion-reduced': {
		// 			selector: '[data-motion="reduced"]',
		// 			mediaQuery: prefersReducedMotion
		// 		},
		// 		'transparency-reduced': {
		// 			selector: '[data-transparency="reduced"]',
		// 			mediaQuery: prefersReducedTransparency
		// 		},
		// 		'forced-colors': {
		// 			mediaQuery: '@media (forced-colors: active)'
		// 		},

		// 		// Contrast
		// 		'contrast-more': {
		// 			selector: '[data-contrast="more"]',
		// 			mediaQuery: prefersHighContrast
		// 		},
		// 		'contrast-less': {
		// 			selector: '[data-contrast="less"]',
		// 			mediaQuery: prefersLowContrast
		// 		}
		// 	}
		// }),

		// // Creative Feature Themes
		// themeVariants({
		// 	group: 'creative',
		// 	themes: {
		// 		browser: {
		// 			mediaQuery: '@media (display-mode: browser)'
		// 		},
		// 		fullscreen: {
		// 			mediaQuery: '@media (display-mode: fullscreen)'
		// 		},
		// 		'minimal-ui': {
		// 			mediaQuery: '@media (display-mode: minimal-ui)'
		// 		},
		// 		standalone: {
		// 			mediaQuery: '@media (display-mode: standalone)'
		// 		},
		// 		'picture-in-picture': {
		// 			mediaQuery: '@media (display-mode: picture-in-picture)'
		// 		},
		// 		'window-controls-overlay': {
		// 			mediaQuery: '@media (display-mode: window-controls-overlay)'
		// 		}
		// 	},
		// 	fallback: 'browser'
		// })
	]
};
