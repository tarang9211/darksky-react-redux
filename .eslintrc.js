module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
      "browser": true,
      "es6": true,
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "consistent-return": [
      1
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": [1, { "forbid": ['any'] }],
    "react/require-default-props": [1],
    "react/prop-types": [0],
  }
};
