type FibonacciInner<Prev extends unknown[], Current extends unknown[], IndexArr extends unknown[], N extends Number>
  = IndexArr['length'] extends N
    ? Current['length']
    : FibonacciInner<Current, [...Prev, ...Current], [...IndexArr, unknown], N>

export type Fibonacci<N extends number>
  = FibonacciInner<[unknown], [], [], N>

type R2 = Fibonacci<8>
