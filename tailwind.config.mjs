/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "serif"],
			},
			colors: {
				principal: "hsla(0, 0%, 100%, 1)",
				background: "hsla(86, 77%, 48%, 1)"
			},
			animation: {
				squeeze: "squeeze 0.6s ease-in-out infinite",
				tada: "tada 1s ease-in-out infinite"
			},
			keyframes: {
				"squeeze": {
					"0%, 100%": {
						"transform": "scale(1, 1)"
					},
					"50%": {
						"transform": "scale(1.1, 0.9)"
					}
				},
				"tada": {
					"0%": {
					"transform": "scale(1)"
					},
					"10%": {
					"transform": "scale(0.9) rotate(-3deg)"
					},
					"20%": {
					"transform": "scale(0.9) rotate(-3deg)"
					},
					"30%": {
					"transform": "scale(1.1) rotate(3deg)"
					},
					"40%": {
					"transform": "scale(1.1) rotate(-3deg)"
					},
					"50%": {
					"transform": "scale(1.1) rotate(3deg)"
					},
					"60%": {
					"transform": "scale(1.1) rotate(-3deg)"
					},
					"70%": {
					"transform": "scale(1.1) rotate(3deg)"
					},
					"80%": {
					"transform": "scale(1.1) rotate(-3deg)"
					},
					"90%": {
					"transform": "scale(1.1) rotate(3deg)"
					},
					"100%": {
					"transform": "scale(1) rotate(0)"
					}
				}
			},
		plugins: [],
		}
	}
}
