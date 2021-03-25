// 以前要定义一个支持多种类型数组参数的函数
function firstElementOld(arr: any[]): any {
  return arr[0];
}

// 使用泛型定义
// T 表示待填充类型
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

// 泛型函数使用
const firstNum: number = firstElement<number>([1, 2, 3]);
const firstStr: string = firstElement<string>(['1', '2', '3']);

// ---------------------泛型函数的类型推论----------------------
// 数组 `map` 方法的函数定义
// 表示把 `Input` 类型 转换成 `Output` 类型
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// 使用时自动推断出结果类型为：`number[]`
// 是不是忍不住想把牛X打在公屏上！！！
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
