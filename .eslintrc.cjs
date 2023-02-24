module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/function-component-definition': [0, { namedComponents: 'arrow-function' }],
    'import/extensions': ['error', 'never', { ignorePackage: false }],
    // import './test' 를 사용하지 못함
    'import/no-unresolved': 0,
    // export {default} 를 사용 하지 못 하게 함
    'no-restricted-exports': 0,
    // react의 jsx파일은 tsx 파일 이어야 함
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    camelcase: 0,
    'no-inner-declarations': 0,
    'no-return-await': 0,
    'consistent-return': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', 'vite.config.ts'] },
    ],
  },
};
