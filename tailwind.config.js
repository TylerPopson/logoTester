/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,vue}",
	],
	theme: {
		extend: {
			colors:{
				"orange": "#FF530D",
				"light-grey": "#EFEFEF",
				"dark-blue": "#2B3A42",
				"med-blue": "#3F5765",
				"light-blue": "#BDD4DE",

				"dark-pink": "#F26BB5",
				"light-pink": "#F294D1",
				"purple": "#DE44F2",
				"blurple": "#C291F2",
				"tan": "#F2DEA0",
			},
			backgroundImage:{
				"sound": "url('/Sound Wave.svg')",
				"vie-logo": "url('/vie-logo.svg')",
			}
		},
	},
	plugins: [],
};
