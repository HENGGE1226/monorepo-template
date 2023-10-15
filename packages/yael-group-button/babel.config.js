module.exports = (api) => {
  api.cache(false)
  return {
    "presets": [
      ["@babel/preset-env"],
    ],
    "plugins": [
      ["@babel/plugin-transform-runtime", {
        "corejs": 3
      }]
    ]
  }
}