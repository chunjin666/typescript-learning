type Func = ((name: string) => string) & ((age: number) => number)
type Ret = ReturnType<Func>
// 重载函数的 ReturnType 返回的是最后一个重载的返回值类型
// ---------------------------

export type UnionToIntersection<U> =
  (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
    ? R
    : never
type t1 = UnionToIntersection<{ a: 1 } | { b: 2 }>
export type UnionToFunctionalIntersection<U> = UnionToIntersection<U extends any ? () => U : never>
type t2 = UnionToFunctionalIntersection<'a' | 'b' | 'c'>

export type UnionToTuple<T>
  = UnionToIntersection<T extends any ? () => T : never> extends () => infer R
    ? [...UnionToTuple<Exclude<T, R>>, R]
    : []

type R = UnionToTuple<'a' | 'b' | 'c'>
