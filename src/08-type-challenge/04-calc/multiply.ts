import { Add } from './add'
import { BuildArray } from './../build-array'
import { Subtract } from './subtract'
export type Multiply<N1 extends number, N2 extends number, Result extends unknown[] = []> = BuildArray<N1> extends [
  infer One,
  ...infer Rest
]
  ? Multiply<Rest['length'], N2, [...Result, ...BuildArray<N2>]>
  : Result['length']

type R = Multiply<2, 3>

// -----------------
export type Multiply2<N1 extends number, N2 extends number, Result extends number = 0> = N2 extends 0
  ? Result
  : Multiply2<N1, Subtract<N2, 1>, Add<Result, N1> & number>

type R2 = Multiply2<2, 3>

// -----------------
export type Multiply3<N1 extends number, N2 extends number, Result extends unknown[] = []> = N2 extends 0
  ? Result['length']
  : Multiply3<N1, Subtract<N2, 1>, [...Result, ...BuildArray<N1>]>

type R3 = Multiply3<2, 3>
