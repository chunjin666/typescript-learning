export type TupleToNestedObject<T extends unknown[], V extends unknown, R = V> =
  T extends [...infer Front, infer Last]
    ? TupleToNestedObject<Front, V, { [x in Last & PropertyKey]: R }>
    : R

type TupleToNestedObject2<Tuple extends unknown[], Value> = 
Tuple extends [infer First, ...infer Rest]
  ? {
      [Key in First as Key extends keyof any ? Key : never]: 
          Rest extends unknown[]
              ? TupleToNestedObject2<Rest, Value>
              : Value
  }
  : Value

type tests = [
  TupleToNestedObject<['a', 'b', 'c'], 'test'>,
  TupleToNestedObject<['a', 'b', undefined], 'test'>,
  TupleToNestedObject2<['a', 'b', 'c'], 'test'>,
  TupleToNestedObject2<['a', 'b', undefined], 'test'>,
]