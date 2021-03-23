// document.getElementById的返回值类型为 HTMLElement|null
const maybeCanvas = document.getElementById("main_canvas");
// 报错
maybeCanvas.getContext("2d");

// 使用 as 语法声明为具体的类型 HTMLCanvasElement
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
myCanvas.getContext("2d");

// 另一种写法，不过无法在.tsx文件中使用
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
myCanvas2.getContext("2d");

// 不能乱来的
const x = "hello" as number;

// 邪门歪道：any大法
// 慎用！！！
const xx = "hello" as any as number;
