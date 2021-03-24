// 当参数类型为一个对象时，可以这样定义其类型
function printCoord(point: { x: number; y: number }) {
  console.log("The coordinate's x value is " + point.x);
  console.log("The coordinate's y value is " + point.y);
}
printCoord({ x: 3, y: 7 });

// 可选属性
function printName(obj: { first: string; last?: string }) {
  // 报错：last可能为空
  console.log(obj.last.toUpperCase());
  // 先做一下判断即可
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  // 或者使用较新的JS语法
  console.log(obj.last?.toUpperCase());
}
// 这2种用法都可以
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
