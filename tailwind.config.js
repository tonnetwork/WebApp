/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./**/*.razor', './**/*.cshtml'],
    theme: {
        extend: {
            screens: {
                'xxl': '1520px',  
            },
        },
    },
    plugins: [],
}
