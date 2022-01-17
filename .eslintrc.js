module.exports = {
  env: {
    browser: true
  },
  extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'arrow-body-style': 'off',
    'no-mixed-operators': 'off',
    'no-shadow': ['error', { allow: ['err', 'error'] }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-underscore-dangle': 'off',
    'guard-for-in': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: ['**/*.js', '*.js']
      }
    ]
  }
};
