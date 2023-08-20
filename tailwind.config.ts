import type { Config } from 'tailwindcss'

/**
 * https://tailwindcss.com/docs/configuration
 * npx tailwindcss init --tsで生成
 */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

// 変数割当が必要か分からないためいったん上記の形で記述している。

// const config: Config = {
//   content: [
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     fontFamily: {
//       sans: ["Noto Sans JP", "font-sans"],
//     },
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };
// export default config;
