/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./templates/**/*.html", // Matches all HTML files in the templates folder
		"./static/**/*.js", // Matches all JavaScript files in the static folder
		"./static/**/*.html",
		"./*.html", // Matches HTML files in the root folder
	],
	theme: {
		extend: {},
	},
	plugins: [
		// Fixed the typo with the plugins array
		require("autoprefixer"),
	],
};
