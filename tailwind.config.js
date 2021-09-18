// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: (theme) => ({
				"radial-gradient": "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)",
				scissor: "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
				paper: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
				rock: "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",
				lizard: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
				cyan: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
			}),
			fontFamily: {
				body: ["Barlow Semi Condensed", "sans-serif"],
			},
			color: {
				"dark-text": "hsl(229, 25%, 31%)",
				"score-text": "hsl(229, 64%, 46%)",
				"header-text": "hsl(217, 16%, 45%)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
