import { BuildArray } from "../build-array";

export type Subtract<N1 extends number, N2 extends number>
  = BuildArray<N1> extends [...BuildArray<N2>, ...infer Rest]
    ? Rest['length']
    : never

type R = Subtract<12, 5>
