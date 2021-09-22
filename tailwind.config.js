// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ["Barlow Semi Condensed", "sans-serif"],
			},
			colors: {
				"primary-radial-gradient": "hsl(214, 47%, 23%)",
				"secondary-radial-gradient": "hsl(237, 49%, 15%)",
				"primary-scissor": "hsl(39, 89%, 49%)",
				"secondary-scissor": "hsl(40, 84%, 53%)",
				"primary-paper": "hsl(230, 89%, 62%)",
				"secondary-paper": "hsl(230, 89%, 65%)",
				"primary-rock": "hsl(349, 71%, 52%)",
				"secondary-rock": "hsl(349, 70%, 56%)",
				"primary-lizard": "hsl(261, 73%, 60%)",
				"secondary-lizard": "hsl(261, 72%, 63%)",
				"primary-cyan": "hsl(189, 59%, 53%)",
				"secondary-cyan": "hsl(189, 58%, 57%)",
				"dark-text": "hsl(229, 25%, 31%)",
				"score-text": "hsl(229, 64%, 46%)",
				"header-outline": "hsl(217, 16%, 45%)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
