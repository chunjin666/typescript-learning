type ArrToUnion<Arr extends unknown[]>
  = Arr extends [infer First, ...infer Rest]
    ? First | ArrToUnion<Rest>
    : never

export type Includes<Arr extends unknown[], Elm>
  = Elm extends ArrToUnion<Arr>
    ? true
    : false

type ArrUnion = ArrToUnion<[1, 2, 3, 4, 5]>
type R = Includes<[1, 2, 3, 4, 5], 3>

// --------

export type IsEqual<First, Second> = (First extends Second ? true : false) & (Second extends First ? true : false)

export type Includes2<Arr extends unknown[], Elm>
  = Arr extends [infer First, ...infer Rest]
    ? IsEqual<First, Elm> extends true
      ? true
      : Includes2<Rest, Elm>
    : false

type R2 = Includes2<[1, 2, 3, 4, 5], 3>