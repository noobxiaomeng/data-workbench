// 数据分析工作台服务端入口
console.log('[data-workbench] Server starting...');

// 模拟服务启动
setTimeout(() => {
  console.log('[data-workbench] Server running on http://localhost:3000');
  console.log('[data-workbench] Press Ctrl+C to stop');
}, 1000);

// 保持进程运行
setInterval(() => {}, 10000);
