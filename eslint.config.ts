import { defineConfig } from "eslint-define-config";

export default defineConfig({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Prettier와 통합하여 코드 스타일 일관성 유지
  ],
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
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": "warn", // any 사용 시 경고
        "@typescript-eslint/explicit-module-boundary-types": "warn", // 반환 타입 명시 권장
      },
    },
  ],
});
