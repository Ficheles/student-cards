/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'expand': 'expand 0.3s ease-out',
      },
      keyframes: {
        expand: {
          '0%': { height: 'var(--collapsed-height)', opacity: 0.8 },
          '100%': { height: 'var(--expanded-height)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}