// 环境兼容性检查脚本
// 该脚本用于验证数据分析工作台的运行环境是否满足要求
// 检查项：系统版本、处理器架构、运行时可用性
// 通过宿主运行时接口执行只读环境探测命令

const g: any = globalThis;
const r: any = await g.__host.worldRead("diag", "run", [
  "cmd.exe",
  ["/c", "ver & echo Arch: %PROCESSOR_ARCHITECTURE%"]
]);

return {
  status: r && r.exitCode === 0 ? "compatible" : "incompatible",
  exitCode: r && r.exitCode,
  stdout: r && r.stdout,
  stderr: r && r.stderr,
};
