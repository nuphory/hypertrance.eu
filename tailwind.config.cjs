/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'2xs': '425px',
			xs: '576px',
			sm: '640px',
			md: '768px',
			lg: '1024px'
		},
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem'
				}
			},
			transitionProperty: {
				quick:
					'height,min-height,max-height,width,min-width,max-width,inset,margin,padding,transform,background-position,background-color,color,fill,stroke,border-color,outline-color,box-shadow,opacity,text-decoration-color,font-size',
				colors:
					'background-color,color,fill,stroke,border-color,outline-color,box-shadow,opacity,text-decoration-color',
				sizing:
					'height,min-height,max-height,width,min-width,max-width,inset,margin,padding,transform,font-size'
			},
			transitionDuration: {
				default: 'var(--transition-duration)'
			},
			height: {
				'screen-dynamic': ['100vh', '100dvh'],
				'screen-small': ['100vh', '100svh'],
				'screen-large': ['100vh', '100lvh']
			},
			minHeight: {
				'screen-dynamic': ['100vh', '100dvh'],
				'screen-small': ['100vh', '100svh'],
				'screen-large': ['100vh', '100lvh']
			},
			maxHeight: {
				'screen-dynamic': ['100vh', '100dvh'],
				'screen-small': ['100vh', '100svh'],
				'screen-large': ['100vh', '100lvh']
			},

			width: {
				'screen-dynamic': ['100vw', '100dvw'],
				'screen-small': ['100vw', '100svw'],
				'screen-large': ['100vw', '100lvw']
			},
			minWidth: {
				'screen-dynamic': ['100vw', '100dvw'],
				'screen-small': ['100vw', '100svw'],
				'screen-large': ['100vw', '100lvw']
			},
			maxWidth: {
				'screen-dynamic': ['100vw', '100dvw'],
				'screen-small': ['100vw', '100svw'],
				'screen-large': ['100vw', '100lvw']
			},

			textColor: {
				neutral: 'var(--text-neutral)',
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)',
				tertiary: 'var(--text-tertiary)',

				'link-neutral': 'var(--text-link-neutral)',
				'link-primary': 'var(--text-link-primary)',
				'link-secondary': 'var(--text-link-secondary)',
				'link-tertiary': 'var(--text-link-tertiary)',

				'link-neutral-hover': 'var(--text-link-neutral-hover)',
				'link-primary-hover': 'var(--text-link-primary-hover)',
				'link-secondary-hover': 'var(--text-link-secondary-hover)',
				'link-tertiary-hover': 'var(--text-link-tertiary-hover)',

				'link-neutral-active': 'var(--text-link-neutral-active)',
				'link-primary-active': 'var(--text-link-primary-active)',
				'link-secondary-active': 'var(--text-link-secondary-active)',
				'link-tertiary-active': 'var(--text-link-tertiary-active)',

				'button-neutral': 'var(--button-text-neutral)',
				'button-primary': 'var(--button-text-primary)',
				'button-secondary': 'var(--button-text-secondary)',
				'button-tertiary': 'var(--button-text-tertiary)',

				'button-neutral-hover': 'var(--button-text-neutral-hover)',
				'button-primary-hover': 'var(--button-text-primary-hover)',
				'button-secondary-hover': 'var(--button-text-secondary-hover)',
				'button-tertiary-hover': 'var(--button-text-tertiary-hover)',

				'button-neutral-active': 'var(--button-text-neutral-active)',
				'button-primary-active': 'var(--button-text-primary-active)',
				'button-secondary-active': 'var(--button-text-secondary-active)',
				'button-tertiary-active': 'var(--button-text-tertiary-active) >'
			},

			backgroundColor: {
				neutral: 'var(--background-neutral)',
				primary: 'var(--background-primary)',
				secondary: 'var(--background-secondary)',
				tertiary: 'var(--background-tertiary)',

				'button-neutral': 'var(--button-background-neutral)',
				'button-primary': 'var(--button-background-primary)',
				'button-secondary': 'var(--button-background-secondary)',
				'button-tertiary': 'var(--button-background-tertiary)',

				'button-neutral-hover': 'var(--button-background-neutral-hover)',
				'button-primary-hover': 'var(--button-background-primary-hover)',
				'button-secondary-hover': 'var(--button-background-secondary-hover)',
				'button-tertiary-hover': 'var(--button-background-tertiary-hover)',

				'button-neutral-active': 'var(--button-background-neutral-active)',
				'button-primary-active': 'var(--button-background-primary-active)',
				'button-secondary-active': 'var(--button-background-secondary-active)',
				'button-tertiary-active': 'var(--button-background-tertiary-active)'
			},

			backgroundSize: {
				300: '300%'
			},

			borderColor: {
				neutral: 'var(--border-neutral)',
				primary: 'var(--border-primary)',
				secondary: 'var(--border-secondary)',
				tertiary: 'var(--border-tertiary)',

				'neutral-hover': 'var(--border-neutral-hover)',
				'primary-hover': 'var(--border-primary-hover)',
				'secondary-hover': 'var(--border-secondary-hover)',
				'tertiary-hover': 'var(--border-tertiary-hover)',

				'neutral-active': 'var(--border-neutral-active)',
				'primary-active': 'var(--border-primary-active)',
				'secondary-active': 'var(--border-secondary-active)',
				'tertiary-active': 'var(--border-tertiary-active)'
			},

			outlineColor: {
				neutral: 'var(--border-neutral)',
				primary: 'var(--border-primary)',
				secondary: 'var(--border-secondary)',
				tertiary: 'var(--border-tertiary)',

				'neutral-hover': 'var(--border-neutral-hover)',
				'primary-hover': 'var(--border-primary-hover)',
				'secondary-hover': 'var(--border-secondary-hover)',
				'tertiary-hover': 'var(--border-tertiary-hover)',

				'neutral-active': 'var(--border-neutral-active)',
				'primary-active': 'var(--border-primary-active)',
				'secondary-active': 'var(--border-secondary-active)',
				'tertiary-active': 'var(--border-tertiary-active)'
			},

			ringColor: {
				neutral: 'var(--border-neutral)',
				primary: 'var(--border-primary)',
				secondary: 'var(--border-secondary)',
				tertiary: 'var(--border-tertiary)',

				'neutral-hover': 'var(--border-neutral-hover)',
				'primary-hover': 'var(--border-primary-hover)',
				'secondary-hover': 'var(--border-secondary-hover)',
				'tertiary-hover': 'var(--border-tertiary-hover)',

				'neutral-active': 'var(--border-neutral-active)',
				'primary-active': 'var(--border-primary-active)',
				'secondary-active': 'var(--border-secondary-active)',
				'tertiary-active': 'var(--border-tertiary-active)'
			},

			ringOffsetColor: {},

			fontFamily: {
				comsat: 'Comsat, sans-serif',
				'comsat-navy': 'Comsat Navy, sans-serif',
				montserrat: 'Montserrat, sans-serif',
				inter: 'Inter, sans-serif',
				yeysk: 'Yeysk, sans-serif'
			},
			colors: {
				information: 'var(--color-information) <alpha-value>',
				success: 'var(--color-success) <alpha-value>',
				warning: 'var(--color-warning) <alpha-value>',
				error: 'var(--color-danger) <alpha-value>',

				neutral: 'var(--background-neutral)',
				primary: 'var(--background-primary)',
				secondary: 'var(--background-secondary)',
				tertiary: 'var(--background-tertiary)',

				'button-neutral': 'var(--button-background-neutral)',
				'button-primary': 'var(--button-background-primary)',
				'button-secondary': 'var(--button-background-secondary)',
				'button-tertiary': 'var(--button-background-tertiary)',

				'button-neutral-hover': 'var(--button-background-neutral-hover)',
				'button-primary-hover': 'var(--button-background-primary-hover)',
				'button-secondary-hover': 'var(--button-background-secondary-hover)',
				'button-tertiary-hover': 'var(--button-background-tertiary-hover)',

				'button-neutral-active': 'var(--button-background-neutral-active)',
				'button-primary-active': 'var(--button-background-primary-active)',
				'button-secondary-active': 'var(--button-background-secondary-active)',
				'button-tertiary-active': 'var(--button-background-tertiary-active)',

				hyperblue: {
					DEFAULT: '#3399ff',
					50: '#e6f2ff',
					100: '#cce6ff',
					150: '#b3d9ff',
					200: '#99ccff',
					250: '#80bfff',
					300: '#66b3ff',
					350: '#4da6ff',
					400: '#3399ff',
					450: '#1a8cff',
					500: '#0080ff',
					550: '#0073e6',
					600: '#0066cc',
					650: '#0059b3',
					700: '#004d99',
					750: '#004080',
					800: '#003266',
					850: '#00264d',
					900: '#001a33',
					950: '#000d1a'
				}
			},
			backdropBrightness: {
				DEFAULT: '50%'
			}
		}
	},
	plugins: [
		require('tailwind-perspective'),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/line-clamp')
	]
};
