import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
<<<<<<<<< Temporary merge branch 1
	theme: {
      extend: {
         fontFamily: {
            inter: ["--font-inter"]
         },
			colors: {
				"primary-blue": "#0634BF",
				"secondary-blue": "#F2F7FF",
				"primary-text": "#385D95",
				black: "#000310",
				gray: "#77808E",
			},
			backgroundColor: {
            gray: "#77808E",
            white: "#FFFFFF",
            dashboard: "#F6F6F6",
				navbar: "#929292",
			},
			dropShadow: {
				sm: "0 14px 18px rgba(0, 0, 0, 0.8)",
			},
			borderRadius: {
				20: "20px",
			},
			borderColor: {
				gray: "#E4E9F1",
			},
		},
	},
	plugins: [],
};
export default config;
=========
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config;
