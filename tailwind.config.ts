import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				sm: "640px", // Small screens (e.g., smartphones)
				md: "868px", // Medium screens (e.g., tablets)
				lg: "1400px", // Large screens (e.g., laptops)
				// xl: "1280px", // Extra-large screens (e.g., desktops)
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				poppins: ["--font-poppins"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
            "accent-blue": "#0634BF",
            "light-blue": "rgba(61, 140, 197, 1)",
            "grey": "rgba(146, 146, 146, 1)",
            "button-text-grey": "rgba(98, 98, 98, 1)",
            "button-bg-grey": "rgba(221, 221, 221, 1)"
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				20: "20px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			borderColor: {
				gray: "#E4E9F1",
			},
			dropShadow: {
            sm: "0 14px 18px rgba(0, 0, 0, 0.8)",
            'search-box': "5px 5px 11px 0px rgba(6, 50, 190, 0.62)"
			},
			backgroundColor: {
				dashboard: "#F6F6F6",
				"primary-blue": "#0634BF",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
