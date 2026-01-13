import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './resources/js/**/*.ts',
    ],

    theme: {
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                '2xl': '1320px',
            },
        },
        extend: {
            fontFamily: {
                headline: ['Cormorant Garamond', 'serif'],
                handwriting: ['Pinyon Script', 'cursive'],
                body: ['Montserrat', 'sans-serif'],
            },
            colors: {
                'sahara-gold': '#C9A875',
                'sunset-terracotta': '#D4816F',
                'safari-green': '#2C5F2D',
                'ivory': '#FAF8F5',
                'sand': '#E8DCC4',
                'charcoal': '#2B2B2B',
                'stone-gray': '#6B6B6B',
                'deep-ochre': '#B8935E',
                'acacia': '#8B7355',

                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                xl: `calc(0.5rem * 2)`, // 16px
                lg: `0.5rem`, // 8px
                md: `calc(0.5rem - 2px)`, // 6px
                sm: 'calc(0.5rem - 4px)', // 4px
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },

    plugins: [forms, require('tailwindcss-animate')],
};
