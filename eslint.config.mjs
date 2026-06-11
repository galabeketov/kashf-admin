import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "components/activity*/**",
    "components/booking-page/**",
    "components/car*/**",
    "components/cruise*/**",
    "components/dashboard/**",
    "components/flight*/**",
    "components/hotel*/**",
    "components/rental*/**",
    "components/tour-list/**",
    "components/tour-single/**",
    "components/header/**",
    "components/hero/**",
    "components/home/**",
  ]),
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@next/next/no-page-custom-font": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
]);
