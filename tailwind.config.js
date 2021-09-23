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
			boxShadow: {
				"inner-button": "inset 0px 8px 0px 0px hsl(0, 0%, 80%)",
				"outter-paper": "0px 7px 0px 0px hsl(230, 89%, 45%)",
				"outter-scissor": "0px 7px 0px 0px hsl(40, 84%, 45%)",
				"outter-rock": "0px 7px 0px 0px hsl(349, 70%, 45%)",
				"outter-lizard": "0px 7px 0px 0px hsl(261, 72%, 45%)",
				"outter-spock": "0px 7px 0px 0px hsl(189, 58%, 45%)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
