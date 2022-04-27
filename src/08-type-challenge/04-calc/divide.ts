import { Add } from './add';
import { Subtract } from './subtract';

export type Divide<N1 extends number, N2 extends number, Count extends number = 0>
  = N1 extends 0
    ? Count
    : Divide<Subtract<N1, N2>, N2, Count extends any ? Add<Count, 1> : never>

type R = Divide<6, 3>

// -------
type Divide2<
    Num1 extends number,
    Num2 extends number,
    CountArr extends unknown[] = []
> = Num1 extends 0 ? CountArr['length']
        : Divide2<Subtract<Num1, Num2>, Num2, [unknown, ...CountArr]>;
type R2 = Divide2<6, 2>