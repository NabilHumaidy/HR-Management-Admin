import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
        "./src/**/*.{js,jsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                lexend: ["Lexend", "sans-serif"],
            },
            colors: {
                primary: {
                    100: "#E6E2F8",
                    200: "#CEC4F6",
                    300: "#B2A2F9",
                    400: "#9178FA",
                    500: "#7152F3",
                    600: "#5D3DE7",
                    700: "#4F31D0",
                    800: "#3517B4",
                    900: "#250C92",
                    merah: "#F45B69",
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    100: "#E1F1BC",
                    200: "#CEE993",
                    300: "#BCDE6B",
                    400: "#AFD751",
                    500: "#A3D139",
                    600: "#97BD33",
                    700: "#88A52A",
                    800: "#798D21",
                    900: "#626615",
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                tertiari: {
                    100: "#F0B0D9",
                    200: "#E67BC2",
                    300: "#D846AB",
                    400: "#CD0D9B",
                    500: "#B21589",
                    600: "#AF0A87",
                    700: "#9B0982",
                    800: "#8A087C",
                    900: "#6C0772",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                
                dark: "#16151C",
                light: "#D9E1E1",
                1: "#30BE82",
                2: "#30BEB6",
                3: "#5D30BE",
                4: "#304FBE",
            },
            keyframes: {
              "accordion-down": {
                  from: { height: "0" },
                  to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                  from: { height: "var(--radix-accordion-content-height)" },
                  to: { height: "0" },
              },
          },
          animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
          },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
    plugins: [require("tailwindcss-animate")],
};
