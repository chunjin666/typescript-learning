interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
//   ^ = type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
//   ^ = type Example2 = string


// ----------------------------格式----------------------------
// SomeType extends OtherType ? TrueType : FalseType;


// -----------------------------------------------------------
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

// 看上面的函数，通过声明重载的方式描述了：根据输入参数的类型是 number 还是 string 决定返回 IdLabel 还是 NameLabel 类型
// 这么写起来比较麻烦，有没有什么更好的方式呢
// 其实，我们可以把这个逻辑放到一个条件类型 Conditional Type 里面

// -------------------------------------------------------------------------
// 这里怎么理解呢，可以把 NameOrId 看成一个函数
// 把 <> 中的 T extends number | string 看成 NameOrId 的参数，
// 结果或者返回值是 T extends number ? IdLabel : NameLabel 条件表达式的结果。
// -------------------------------------------------------------------------
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel2<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel2("typescript");
//  ^ = let a: NameLabel

let b = createLabel2(2.8);
//  ^ = let b: IdLabel

let c = createLabel2(Math.random() ? "hello" : 42);
//  ^ = let c: NameLabel | IdLabel