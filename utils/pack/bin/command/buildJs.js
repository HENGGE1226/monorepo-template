const path = require("path");
const { exec } = require("child_process");
const { MODE } = require("../../constants/index.js");
const { log } = require("../../utils/index.js");

/**
 * 获取当前打包项目的package.json信息
 */
const pkgPath = path.resolve(process.cwd(), "package.json");
const pkg = require(pkgPath);
const { name, version, moduleName } = pkg;

module.exports = function () {

  const configPath = path.resolve(__dirname, "../../../vite.config.js");
  const initDist = `rm -rf dist`;

  const umd = `cross-env BUILD_MODE=${
    MODE.BUILD_JS
  } VERSION=${version} FILE_NAME=${name} NAME=${moduleName} vite build --config ${configPath}`;

  const command = `${initDist} && ${umd}`;

  log(
    exec(
      command,
      function (error) {
        if (error) {
          process.exit(1);
        }
      }
    )
  );

};
