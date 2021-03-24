//-----------------------object-------------------------
// object 表示 非原始类型
// 所有原始类型
type Primitive = string | boolean | number | bigint | symbol | null | undefined;
// 非原始类型
type NonPrimitive = object;

// Object构造函数的定义
// node_modules/typescript/lib/lib.es5.d.ts
interface ObjectConstructor {
  create(o: object | null): any;
  // ...
}

const proto = {};

Object.create(proto); // OK
Object.create(null); // OK
Object.create(undefined); // Error
Object.create(1337); // Error
Object.create(true); // Error
Object.create("oops"); // Error

// object 类型的另一个用例是作为 ES2015 的一部分引入的 WeakMap 数据结构。
// 它的键必须是对象，不能是原始值。
interface WeakMap<K extends object, V> {
  delete(key: K): boolean;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
}

//-----------------------Object-------------------------
// Object 类型。该类型是所有 Object 类的实例的类型。它由以下两个接口来定义：
// node_modules/typescript/lib/lib.es5.d.ts
interface Object {
  constructor: Function;
  toString(): string;
  toLocaleString(): string;
  valueOf(): Object;
  hasOwnProperty(v: PropertyKey): boolean;
  isPrototypeOf(v: Object): boolean;
  propertyIsEnumerable(v: PropertyKey): boolean;
}

// node_modules/typescript/lib/lib.es5.d.ts 
interface ObjectConstructor {
  /** Invocation via `new` */
  new(value?: any): Object;
  /** Invocation via function calls */
  (value?: any): any;
 
  readonly prototype: Object;
 
  getPrototypeOf(o: any): any;
 
  // ···
}
declare var Object: ObjectConstructor;

//-----------------------{}-------------------------
// `{}` 和 `Object` 几乎差不多，区别看下面比较部分。

//-----------------------区别-------------------------
// 赋值给 `Object` 类型的对象时，不能与 `Object` 接口冲突。
const obj1: Object = {
  toString() { // Error
    return 123;
  }
}
const obj2: object = {
  toString() {
    return 123;
  },
};
const obj3: {} = {
  toString() {
    return 123;
  },
};

// 原始类型不能赋值给 `object` 类型，可以赋值给 `Object` 和 `{}`
function needObject(x: Object): void {}
function needobject(x: object): void {}
function needEmptyObject(x: {}): void {}
needObject('test') // Ok
needobject('test') // Error，因为 string 是原始类型
needEmptyObject('test') // Ok
needObject({ foo: 1 }) // Ok
needobject({ foo: 1 }) // Ok
needEmptyObject({ foo: 1 }) // Ok