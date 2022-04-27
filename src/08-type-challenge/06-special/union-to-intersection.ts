// A & B 可以看成是  A | B 的子类型，因为它更具体
// 父类型 => 子类型 ： 逆变
// 子类型 => 父类型 ： 协变
// 在 TypeScript 中函数参数有逆变性质，如果参数可能是多个类型，参数类型会变成它们的交叉类型
type t = 'a' | 'b' extends 'a' & 'b' ? true : false
export type UnionToIntersection<U>
  = (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
    ? R
    : never
type R1 = UnionToIntersection<number | string>
type R2 = UnionToIntersection<{ a: 1 } | {} | { c: 3 }>