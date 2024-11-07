import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // 모든 규칙을 off로 설정
      "no-console": "off",
      "no-unused-vars": "off",
      eqeqeq: "off",
      semi: "off",
      quotes: "off",
      // 추가적인 규칙도 모두 off로 설정
      "comma-dangle": "off",
      curly: "off",
      indent: "off",
      "no-debugger": "off",
      "no-trailing-spaces": "off",
      // 다른 규칙을 여기에 추가할 수 있습니다
    },
  }
);
