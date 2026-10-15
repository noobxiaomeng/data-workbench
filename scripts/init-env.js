// 环境初始化脚本
// 该脚本用于初始化数据分析工作台的运行环境

const fs = require('fs');
const path = require('path');

console.log('[data-workbench] 初始化运行环境...');

// 创建必要的目录
const dirs = ['data', 'logs', 'cache'];
dirs.forEach(dir => {
  const dirPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`[data-workbench] 创建目录: ${dirPath}`);
  }
});

// 检查配置文件
const configPath = path.join(__dirname, '..', 'config', 'runtime.json');
if (fs.existsSync(configPath)) {
  console.log('[data-workbench] 配置文件已存在');
} else {
  console.log('[data-workbench] 配置文件不存在，使用默认配置');
}

console.log('[data-workbench] 环境初始化完成');
