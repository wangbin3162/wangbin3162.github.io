module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  overrides: [],
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'eslint:recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: 0,
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': 0
  }
}
