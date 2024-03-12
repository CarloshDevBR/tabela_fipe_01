/** @type {import('tailwindcss').Config} */

export const content = [
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
];

export const theme = {
  corePlugins: {
    preflight: false,
  },
  extend: {},
};

export const plugins = [];
