function foo(bar: string) {
  console.log(this.str); // 这里的this为any
}

// 改正方法为，显示指定this的类型
class Foo {
  str: string;
}
function foo2(this: Foo, bar: string) { // 指定this为Foo类型的实例
  console.log(this.str);
}
foo2('xxx'); // Error
foo2.call({str: 'yyy'}, 'xxx'); // Ok
