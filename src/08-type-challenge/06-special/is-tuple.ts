type test = number extends unknown ? true : false
export type IsTuple<T>
  = T extends unknown[]
    ? number extends T['length']
      ? false
      : true
    : false

type R1 = IsTuple<number[]>
type R2 = IsTuple<[number, string]>
type R3 = IsTuple<[]>

//-------------------
type IsTuple2<T> = 
    T extends readonly [...params: infer Eles] 
        ? NotEqual<Eles['length'], number> 
        : false

type NotEqual<A, B> = 
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
  ? false : true;