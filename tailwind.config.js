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
				"radial-gradient1": "hsl(214, 47%, 23%)",
				"radial-gradient2": "hsl(237, 49%, 15%)",
				scissor1: "hsl(39, 89%, 49%)",
				scissor2: "hsl(40, 84%, 53%)",
				paper1: "hsl(230, 89%, 62%)",
				paper2: "hsl(230, 89%, 65%)",
				rock1: "hsl(349, 71%, 52%)",
				rock2: "hsl(349, 70%, 56%)",
				lizard1: "hsl(261, 73%, 60%)",
				lizard2: "hsl(261, 72%, 63%)",
				cyan1: "hsl(189, 59%, 53%)",
				cyan2: "hsl(189, 58%, 57%)",
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
