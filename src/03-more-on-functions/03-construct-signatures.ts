type SomeObject = {
  someProp: string;
};

// 使用签名的方式
type SomeConstructor = {
  new (s: string): SomeObject;
};
// 使用表达式的方式
type SomeConstructor2 = new (s: string) => SomeObject;
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
