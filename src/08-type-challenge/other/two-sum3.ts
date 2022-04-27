/* --------------- Your Code Here --------------- */

type ToTuple<N extends number, T extends unknown[] = []> =
  T['length'] extends N ? T : ToTuple<N, [...T, unknown]>

type ArrToUnion<Arr extends unknown[]> =
  Arr extends [infer First, ...infer Rest]
    ? First | ArrToUnion<Rest>
    : never

type BuildArr<N extends number, Arr extends unknown[] = []> = Arr['length'] extends N ? Arr : BuildArr<N, [...Arr, unknown]>

type Add<N1 extends number, N2 extends number> =
  [...BuildArr<N1>, ...BuildArr<N2>]['length']

type Subtract<N1 extends number, N2 extends number> =
  BuildArr<N1> extends [...BuildArr<N2>, ...infer Rest] ? Rest['length'] : never

type Includes<Arr extends unknown[], Item> =
  Arr extends [infer First, ...infer Rest]
    ? Equal<First, Item> extends true
      ? true
      : Includes<Rest, Item>
    : false

type Shift<Arr extends unknown[]> = Arr extends [any, ...infer Rest] ? Rest : []

export type TwoSum<N extends number[], T extends number, R = never > = 
  N['length'] extends 0
    ? false
    : Subtract<T, N[0]> extends R
      ? true
      : TwoSum<Shift<N>, T, R | Subtract<T, N[0]>>
// TODO 这种写法行不通啊
type r = TwoSum<[0, 1, 2], 2>
type r2 = TwoSum<[
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
], 2>
/* --------------- Test Case --------------- */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Subtract<2, 0>,
  Shift<[1, 2, 3, 4]>,
  2 extends (1 | 2) ? true : false,
  Expect<Equal<TwoSum<[0, 1, 2], 2>, true>>,
  Expect<Equal<TwoSum<[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
  ], 2>, false>>
]
