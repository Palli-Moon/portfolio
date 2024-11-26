import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  daisyui: {
    themes: ['forest'],
  },
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [daisyui],
} satisfies Config;
