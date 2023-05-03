module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },

  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'prettier'],
  plugins: ['import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/function-component-definition': [0, { namedComponents: 'arrow-function' }],
    'import/extensions': [
      'error',
      'never',
      { ignorePackage: false, pattern: { '*.css': 'always', '*.svg': 'always' } },
    ],
    // import './test' 를 사용하지 못함
    'import/no-unresolved': 0,
    // export {default} 를 사용 하지 못 하게 함
    'no-restricted-exports': 0,
    'react/react-in-jsx-scope': 'off',
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
      {
        devDependencies: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.spec.ts',
          'vite.config.ts',
          'config/**/*',
        ],
      },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'any',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['if'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'default-param-last': 'off',
    'import/newline-after-import': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/default-param-last': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/no-unknown-property': ['error', { ignore: ['charSet'] }],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: false,
        allowNamedExports: false,
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
