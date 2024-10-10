/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {
            blur: {
                xs: '1px',
            }
        },
        screens: {
            'xs': '375px',

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '960px',
            // => @media (min-width: 960px) { ... }

            'xl': '1024px',
            // => @media (min-width: 1024px) { ... }

            '2xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '3xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontSize: {
            'xs': '0.625rem',
            'sm': '0.75rem',
            'md': '0.875rem',
            'xl': '1rem',
        }
    },
    plugins: [],
}