/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                caveat: ['Caveat', 'sans-serif'],
            },
            colors: {
                customBlue: '#15419E',
                customOrange: '#FF7A00',
                customGray: '#808080'
            },
            screens: {
                "mdd": {max: "768px"},
                "i12pro": {max: "400px"},
                "ise": {max: "380px"},
                "small": {max: "385px"},
                "mdd": { max: "640px" },
                "mddd": { max: "600px" },
                "ht": { min: "1500px" },
                "dr": { max: "400px" },
                "drm": { min: "401px" },
                "br": { max: "1280px" },
                "1024m": { max: "1024px" },
                "1400m": {max: "1400px"},
                "mxl": {min: "1024"},
                "xl": {min: "1280px"},
                "2xl": {min: "1840px"},
            },
        },
    },
    plugins: [],
}
