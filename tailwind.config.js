/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				player: '#B0CBDD',
				'player-light': '#eff5f8'
			}
		}
	},
	plugins: []
};
