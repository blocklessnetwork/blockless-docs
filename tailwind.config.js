const colors = require('tailwindcss/colors')

const makePrimaryColor =
	(l) =>
	({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `hsl(var(--nextra-primary-hue) 100% ${l}%)`
		}
		return `hsl(var(--nextra-primary-hue) 100% ${l}% / ${opacityValue})`
	}

/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'nx-',
	darkMode: ['class'],
	content: [
		'./nextra-theme-docs/src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/nextra/dist/icons/*.js',
		'./node_modules/nextra/dist/components/*.js',
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem'
		},
		letterSpacing: {
			tight: '-0.015em'
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			gray: colors.gray,
			slate: colors.slate,
			neutral: colors.neutral,
			red: colors.red,
			orange: colors.orange,
			blue: colors.blue,
			yellow: colors.yellow,
			primary: {
				50: makePrimaryColor(97),
				100: makePrimaryColor(94),
				200: makePrimaryColor(86),
				300: makePrimaryColor(77),
				400: makePrimaryColor(66),
				500: makePrimaryColor(50),
				600: makePrimaryColor(45),
				700: makePrimaryColor(39),
				750: makePrimaryColor(35),
				800: makePrimaryColor(32),
				900: makePrimaryColor(24)
			},
			muted: '#F1F5F9',
			border: '#E2E8F0',
			foreground: '#0F172A',
			mutedForeground: '#64748B'
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				dark: '#111',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}
