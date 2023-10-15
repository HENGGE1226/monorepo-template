const path = require('path');


// 输出实时日志到console
const log = (task) => {
  return new Promise((resolve, reject) => {
    if (task) {
      task.stdout.pipe(process.stdout);
      task.stderr.pipe(process.stderr);
      task.on("exit", (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject();
        }
      });
    }
  });
}


module.exports = {
  log
}