type ReverseArr<Arr extends unknown[]>
  = Arr extends [infer First, ...infer Rest] ? [...ReverseArr<Rest>, First] : Arr

type R = ReverseArr<[1, 2, 3, 4, 5]>
