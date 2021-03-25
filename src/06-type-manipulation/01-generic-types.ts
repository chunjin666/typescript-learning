// 这个例子定义了该函数参数和返回值具有相同的类型
function identity<Type>(arg: Type): Type {
  return arg;
}

// 这是上面这个泛型函数的`表达式形式`的声明
let myIdentity: <Type>(arg: Type) => Type = identity;
// 我们还可以将泛型类型编写为对象字面量形式的调用签名
let myIdentity2: { <Type>(arg: Type): Type } = identity;
// 还可以使用 interface 的方式编写
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
let myIdentity3: GenericIdentityFn = identity;
// 把泛型参数移到整个 interface 上
interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
let myIdentity4: GenericIdentityFn2<number> = identity;
