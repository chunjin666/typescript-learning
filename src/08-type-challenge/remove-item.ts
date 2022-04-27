import { IsEqual } from "./includes";

type Push<Arr extends unknown[], Elm> = [...Arr, Elm]
type UnShift<Arr extends unknown[], Elm> = [Elm, ...Arr]

export type RemoveItem<Arr extends unknown[], Item, Result extends unknown[] = []>
  = Arr extends [infer First, ...infer Rest]
    ? IsEqual<First, Item> extends true
      ? RemoveItem<Rest, Item, Result>
      : UnShift<RemoveItem<Rest, Item, Result>, First>
    : Result

type R = RemoveItem<[1, 2, 3, 4, 5], 2>
