module.exports = {
  extends: [
    'universe',
    'universe/native',
    'universe/web',
    'universe/shared/typescript-analysis',
  ],

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['react-hooks'],
  rules: {
    'import/order': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        quoteProps: 'as-needed',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    node: true,
  },
}
