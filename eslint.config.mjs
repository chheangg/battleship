import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      'indent': ['error', 2],
      '@stylistic/js/indent': ['error', 2],
      "semi": ['error'],
    }
  },
  {
    ignores: ['dist/*', 'node_modules/*']
  }
];