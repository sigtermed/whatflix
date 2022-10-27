/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('daisyui')],
	daisyui: {
		styled: true,
		themes: ['dark'],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: ''
	}
};
