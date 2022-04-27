type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`

export type AllCombinations<A extends string, B extends string = A> =
  A extends A
    ? Combination<A, AllCombinations<Exclude<B, A>>>
    : never

type R = AllCombinations<'a' | 'b' | 'c'>
type E = Exclude<'a' | 'b' | 'c', 'b'>
