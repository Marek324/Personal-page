/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                text: "#e2e6ee",
                background: "#0a0e16",
                primary: "#8da8d8",
                secondary: "#1f4180",
                accent: "#3873df",
            },
            fontFamily: {
                "anonymous-pro": ['"Anonymous Pro"', "monospace"],
            },
        },
    },
    plugins: [],
};
