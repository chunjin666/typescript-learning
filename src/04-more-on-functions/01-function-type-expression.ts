function logTime(logMethod: (value: string) => void) {
  logMethod(new Date().toUTCString());
}

function logToConnsole(value: string) {
  console.log(value);
}

logTime(logToConnsole);
logTime(console.warn);
logTime(localStorage.setItem); // Error

// 也可以给函数类型定义取个类型别名
type LogMethod = (value: string) => void;
function logTime2(logMethod: LogMethod) {
  // ...
}
