
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Outfit', 'system-ui', 'sans-serif'],
				display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
			},
			colors: {
				border: 'rgb(var(--border))',
				input: 'rgb(var(--input))',
				ring: 'rgb(var(--ring))',
				background: 'rgb(var(--background))',
				foreground: 'rgb(var(--foreground))',
				primary: {
					DEFAULT: 'rgb(var(--primary))',
					foreground: 'rgb(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'rgb(var(--secondary))',
					foreground: 'rgb(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'rgb(var(--destructive))',
					foreground: 'rgb(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'rgb(var(--muted))',
					foreground: 'rgb(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'rgb(var(--accent))',
					foreground: 'rgb(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'rgb(var(--popover))',
					foreground: 'rgb(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'rgb(var(--card))',
					foreground: 'rgb(var(--card-foreground))'
				},
				// EarthShip custom colors
				forest: {
					50: '#f0f9f4',
					100: '#dcf2e4',
					200: '#bce5cc',
					300: '#8bd3a8',
					400: '#52b97d',
					500: '#2d9f5d',
					600: '#1f7f47',
					700: '#1B4332',
					800: '#174a2e',
					900: '#133d26',
				},
				earth: {
					50: '#faf7f2',
					100: '#f4ede0',
					200: '#e8d9c0',
					300: '#dbc197',
					400: '#A0785A',
					500: '#8B5A3C',
					600: '#7a4f35',
					700: '#66412c',
					800: '#533527',
					900: '#442c21',
				},
				sidebar: {
					DEFAULT: 'rgb(var(--sidebar-background))',
					foreground: 'rgb(var(--sidebar-foreground))',
					primary: 'rgb(var(--sidebar-primary))',
					'primary-foreground': 'rgb(var(--sidebar-primary-foreground))',
					accent: 'rgb(var(--sidebar-accent))',
					'accent-foreground': 'rgb(var(--sidebar-accent-foreground))',
					border: 'rgb(var(--sidebar-border))',
					ring: 'rgb(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(32px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				kenburns: {
					'0%': { transform: 'scale(1) translate(0, 0)' },
					'100%': { transform: 'scale(1.12) translate(-1.5%, -1%)' }
				},
				'slow-pan': {
					'0%': { transform: 'scale(1.05) translateX(0)' },
					'100%': { transform: 'scale(1.05) translateX(-2%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
				'slide-in': 'slide-in 0.5s ease-out',
				kenburns: 'kenburns 28s ease-out forwards',
				'slow-pan': 'slow-pan 20s ease-in-out alternate infinite'
			},
			backgroundImage: {
				'gradient-earth': 'linear-gradient(135deg, #1B4332 0%, #2d9f5d 50%, #8B5A3C 100%)',
				'gradient-forest': 'linear-gradient(to right, #1B4332, #2d9f5d)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
