/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			mono: ['Roboto Mono', 'monospace'],
			tahoma: ['Tahoma', 'sans-serif'],
		},
		extend: {
			transitionDuration: {
				5: '5ms',
			},
		},
	},

	plugins: [],
};
