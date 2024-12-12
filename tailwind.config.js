/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			minHeight: {
				"min-70": "70%",
			},
			backgroundColor: {
				face: "#4767b3",
			},
			gradientColorStops: {
				ins1: "#7f37c9",
				ins2: "#ff2992",
				ins3: "#ff9807",
			},
			textColor: {
				orc: "#7a7a7a"
			},
		},
	},
	plugins: [],
};
