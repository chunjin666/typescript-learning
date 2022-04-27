import { BuildArray } from "../build-array";

export type Add<N1 extends number, N2 extends number>
  = [...BuildArray<N1>, ...BuildArray<N2>]['length']

type R = Add<12, 5>
