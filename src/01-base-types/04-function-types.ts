// 添加参数类型定义和返回值类型定义
function getGreet(name: string): string {
  return "Hello, " + name.toUpperCase() + "!!";
}
// 没有返回值时默认为 `void` , 可省略
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// 编译器会进行类型推断得到返回值类型
// 但推荐还是写清楚，这样一眼就能看出来返回值类型
function getGreet2(name: string) {
  return "Hello, " + name.toUpperCase() + "!!";
}

// 匿名函数
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
  // 自动推断s为string类型，写错方法名会报错提示
  console.log(s.toUppercase());
});
