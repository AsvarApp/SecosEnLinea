/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				bgColor:'#242233',
				colorPrimary: '#A04DBD',
				colorMenu: '#313044'
			}
		},
	},
	plugins: [],
}
