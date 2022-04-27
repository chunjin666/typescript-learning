import { Add } from './add';

export type StrLength<Str extends string, Result extends number = 0>
  = Str extends `${infer One}${infer Rest}`
    ? Add<StrLength<Rest, Result>, 1>
    : Result

type R = StrLength<'abc '>

// -------

export type StrLength2<Str extends string, Result extends unknown[] = []>
  = Str extends `${infer One}${infer Rest}`
    ? StrLength2<Rest, [unknown, ...Result]>
    : Result['length']

type R2 = StrLength2<'abc '>
