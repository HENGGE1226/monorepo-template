
/**
 * 打包命令的映射
 */
const MODE = {
  BUILD_NPM: "npm",
  BUILD_JS: "umd",
  DEV: "dev"
};

/**
 * 打包产物格式
 */
const FORMAT = {
  ESM: "esm",
  CJS: "cjs",
};


module.exports = {
  MODE,
  FORMAT,
};
