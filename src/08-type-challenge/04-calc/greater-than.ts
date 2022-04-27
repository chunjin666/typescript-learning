export type GreaterThan<N1 extends number, N2 extends number, Arr1 extends unknown[] = [], Arr2 extends unknown[] = []>
  = N1 extends Arr1['length']
    ? false
    : N2 extends Arr2['length']
      ? true
      : GreaterThan<N1, N2, [...Arr1, unknown], [...Arr2, unknown]>

type R1 = GreaterThan<0, 0>
type R2 = GreaterThan<1, 0>
type R3 = GreaterThan<0, 1>
type R4 = GreaterThan<5, 5>
type R5 = GreaterThan<5, 8>
type R6 = GreaterThan<9, 8>
