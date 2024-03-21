import type { Config } from 'tailwindcss';

const config: Config = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    bg: '#0f1108',
                    text: '#f5f5f2',
                    offblack: '#1f1f1f',
                },
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883',
                },
            },
        },
        screens: {
            'max-xl': { max: '1279px' },
            xl: { min: '1279px' },
        },
    },
    plugins: [],
};
export default config;
