
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
			colors: {
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// TaskRabbit brand colors
				"ryb-green": "#50AF33",
				"dark-green": "#264F18",
				"pale-gold": "#E8C547",
				"premium-gold": "#D4AF37",
				"forest-dark": "#1A2E0F",
				"forest-light": "#7FCB67",
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
				'pulse-gentle': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'leaf-flutter': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'25%': { transform: 'rotate(5deg) scale(1.05)' },
					'50%': { transform: 'rotate(0deg) scale(1)' },
					'75%': { transform: 'rotate(-5deg) scale(1.05)' },
					'100%': { transform: 'rotate(0deg) scale(1)' }
				},
				'leaf-fall': {
					'0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
					'50%': { transform: 'translateY(20px) rotate(180deg)', opacity: '1' },
					'100%': { transform: 'translateY(50px) rotate(360deg)', opacity: '0' }
				},
				'grow-fade': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'leaf-flutter': 'leaf-flutter 3s ease-in-out infinite',
				'leaf-fall': 'leaf-fall 3s linear infinite',
				'grow-fade': 'grow-fade 0.3s ease-out forwards',
				'shimmer': 'shimmer 2.5s infinite linear',
				'slide-up': 'slide-up 0.4s ease-out forwards',
				'slide-down': 'slide-down 0.4s ease-out forwards',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #50AF33 0%, #264F18 100%)',
				'gradient-hover': 'linear-gradient(135deg, #264F18 0%, #50AF33 100%)',
				'gradient-gold': 'linear-gradient(135deg, #E8C547 0%, #D4AF37 100%)',
				'gradient-premium': 'linear-gradient(to right, #D4AF37, #F5E1A4, #D4AF37)',
			},
			fontFamily: {
				display: ['var(--font-playfair)', 'serif'],
				sans: ['var(--font-inter)', 'sans-serif'],
			},
			boxShadow: {
				'premium': '0 10px 25px -5px rgba(212, 175, 55, 0.3)',
				'forest': '0 10px 25px -5px rgba(80, 175, 51, 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
