export type IsUnion<A, B = A> =
  A extends A
    ? ([B] extends [A] ? false : true)
    : never
// 当 A 是联合类型时
// `A extends A` 这种写法是为了触发分布式条件类型，让每个类型单独传入
// `A extends A` 和 `[A] extends [A]`是不同的处理，前者是单个类型和整个类型做判断，后者两边都是整个联合类型，因为只有 extends 左边直接是参数才会触发分布式条件类型
type R = IsUnion<'a' | 'b' | 'c'>
