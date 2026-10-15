// 系统信息收集脚本
// 该脚本用于收集运行环境的基本信息（主机名、系统版本），用于生成运行环境画像
// 收集项：主机名、系统版本

const g: any = globalThis;

// 收集基本系统信息（用于生成运行环境画像）
const r: any = await g.__host.worldRead("sysinfo", "run", [
  "cmd.exe",
  ["/c", "echo Host: %COMPUTERNAME% && echo OS: %OS%"]
]);

return {
  status: r && r.exitCode === 0 ? "collected" : "failed",
  exitCode: r && r.exitCode,
  stdout: r && r.stdout,
  stderr: r && r.stderr,
};
