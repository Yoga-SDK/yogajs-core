// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: "6.10"
        },
      },
    ],
  ],
  env: {
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: "6.10"
            },
          },
        ],
      ],
    },
    browser: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              "browsers": "last 2 versions, ie 10-11"
            },
            "modules": false
          },
        ],
      ],
    },
    module: {
      presets: [
        ["@babel/preset-env", {
          targets: {
            node: "6.10"
          },
          modules: false
        }]
      ]
    }
  },
  sourceMaps: true
};
