type DeepPromiseValueType<P> = P extends Promise<infer ValueType>
  ? DeepPromiseValueType<ValueType>
  : P

type r1 = DeepPromiseValueType<Promise<Promise<number[]>>>
type r2 = number[]
