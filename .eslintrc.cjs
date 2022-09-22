module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [0, 'ignorePackages'],
  },
  settings: {
    version: 'detect',
  },
  env: {
    jest: true,
  },
};
