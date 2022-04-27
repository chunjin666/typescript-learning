export type Chunk<Arr extends unknown[], N extends number, R extends unknown[][] = []> =
  Arr extends [infer First, ...infer Rest]
    ? Rest extends [infer Second, ...infer Rest2]
      ? Chunk<Rest2, N, [...R, [First, Second]]>
      : Chunk<Rest, N, [...R, [First]]>
    : R

type tests = [
  Chunk<[1, 2, 3, 4, 5], 2>
]