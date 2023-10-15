const path = require("path");
const { exec } = require("child_process");
const { MODE } = require('../../constants/index.js')
const { log, executeCLI } = require("../../utils/index.js")


module.exports = function() {

  const configPath = path.resolve(__dirname, "../../../vite.config.js");
  const init = `rm -rf dist`;

  const esm = `cross-env BUILD_MODE=${
    MODE.BUILD_NPM
  } vite build --config ${configPath}`;

  const command = `${init} && ${esm}`;
  
  log(exec(
    command,
    {
      env: {
        ...process.env,
        MODE: MODE.NPBUILD_NPMM,
      },
    },
    function (error) {
      if (error) {
        process.exit(1);
      }
      // 正式版添加tag
      // if (isFinal) {
      //   console.log("=== add tag ===");
      //   const tagName = `${name}@${version}`;
      //   try {
      //     execSync(`git tag -d ${tagName}`);
      //   } catch (error) {
      //     console.log(error);
      //   }
      //   execSync(
      //     `git tag ${tagName} && git tag && git push origin ${tagName}`
      //   );
      // }
    }
  ))

  console.log('build')
}