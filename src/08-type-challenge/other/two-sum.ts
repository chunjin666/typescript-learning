/* --------------- Your Code Here --------------- */

type ArrToUnion<Arr extends unknown[]> =
  Arr extends [infer First, ...infer Rest]
    ? First | ArrToUnion<Rest>
    : never

type BuildArr<N extends number, Arr extends unknown[] = []> = Arr['length'] extends N ? Arr : BuildArr<N, [...Arr, unknown]>

type Add<N1 extends number, N2 extends number> =
  [...BuildArr<N1>, ...BuildArr<N2>]['length']

type Subtract<N1 extends number, N2 extends number> =
  BuildArr<N1> extends [...BuildArr<N2>, ...infer Rest] ? Rest['length'] : never

type TwoSumInner<N extends number, T extends number>
  = N extends N
    ? Subtract<T, N> extends N
      ? true
      : never
    : never

export type TwoSum<N extends number[], T extends number, Map = never> = [TwoSumInner<ArrToUnion<N> & number, T>] extends [never] ? false : TwoSumInner<ArrToUnion<N> & number, T>
type r = TwoSum<[0, 1, 2], 2>
type r2 = TwoSum<[
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
], 2>
/* --------------- Test Case --------------- */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TwoSum<[0, 1, 2], 2>, true>>,
  Expect<Equal<TwoSum<[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
  ], 2>, false>>
]
