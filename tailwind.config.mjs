// tailwind.config.mjs
export default {
	content: [
		"./src/**/*.{html,js,jsx,ts,tsx}",
		"./components/**/*.{html,js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx,html}"
	],
	theme: {
		extend: {
			utilities: {
				'no-visited': {
					'&:visited': {
						color: 'inherit',
						textDecoration: 'none',
					},
				},
			},
		},
	},
	plugins: [],
}