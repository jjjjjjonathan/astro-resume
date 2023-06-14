/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				letter: '1367px',
				large: '777px',
				medium: '716px',
				small: '600px',
				xs: '460px',
			},
			fontFamily: {
				rubik: ['Rubik', 'sans-serif'],
				sans: ['ui-sans-serif', 'system-ui'],
			},
		},
	},
	plugins: [],
};
