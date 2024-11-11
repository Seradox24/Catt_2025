/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFA500' // Naranja
			},
			backgroundImage: {
				'sanFrancisco': "url('../img/th.jpeg')",
			}
		},
	},
	plugins: [],
}
