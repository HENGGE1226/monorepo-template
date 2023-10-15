#!/usr/bin/env node

// 获取命令中携带的参数
const argv = require("minimist")(process.argv.slice(2));
const command = argv._[0];

// 获取构建成npm包的方法
const build = require("./command/build.js")

// 获取构建成umd格式的方法
const buildjs = require('./command/buildJs.js')

// 获取启动本地服务的方法
const runDev = require('./command/dev.js')

// 构建方式的映射
const { MODE } = require("../constants");

const { BUILD_NPM, BUILD_JS, DEV } = MODE;

switch (command) {
  case BUILD_NPM:
    build();
    break;
    
  case BUILD_JS:
    buildjs();
    break;

  case DEV: 
    runDev();
    break;

  default:
    break;
}
