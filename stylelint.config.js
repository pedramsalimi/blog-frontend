module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'block-no-empty': null,
    'unit-whitelist': ['em', 'rem', 's', 'ms', 'px', 'deg', '%'],
  },
  ignoreFiles: [
    '**/*.tsx',
    '.next/**/*.css',
    'build/**/*.css',
    'node_module/**/*.css',
    'node_module/**/*.scss',
  ],
};
