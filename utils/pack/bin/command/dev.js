const path = require("path");
const { exec } = require("child_process");
const { log } = require('../../utils')


module.exports = function() {
  const rootDevPath =  path.resolve(process.cwd(), "../../utils");
  const configPath = path.resolve(__dirname, "../../../vite.config.js");

  const devCli = `${
    "vite"
  } ${rootDevPath} --config ${configPath}`;
  
  log(exec(devCli, function(error) {
    if (error) {
      process.exit(1);
    }
  }))

}