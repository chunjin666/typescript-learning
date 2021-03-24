// 定义一个有属性的函数
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
// 使用表达式的方式定义
type DescribableFunction2 =  ((someArg: number) => boolean) & { description: string };

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

let fn1: DescribableFunction;
doSomething(fn1!) // Ok
// 这证明第2种方式和第一种方式等价
let fn2: DescribableFunction2;
doSomething(fn2!) // Ok
