import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffe600",
                secondary: '#3483fa',
                'secondary-200': '#3277db',
                "light-gray": "#eeeeee",
                "dark-gray": "#999999",
                "xdark-gray": "#666666",
            },
            spacing: {
                'image': '180px',
                'lg-image': '680px',
                'small': '16px',
                'medium': '32px'
            }
        },
        borderRadius: {
            DEFAULT: '4px',
        }
    },
    plugins: [],
}
export default config
