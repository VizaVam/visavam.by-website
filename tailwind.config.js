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
            },
        },
    },
    plugins: [],
}
