import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#0634BF",
				"secondary-blue": "#F2F7FF",

				"primary-text": "#385D95",

				black: "#000310",
				gray: "#77808E",
			},
			backgroundColor: {
				gray: "#77808E",
				"navbar-gray": "#929292",
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
