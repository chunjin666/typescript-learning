
type QueryParseSingle<Str extends string>
  = Str extends `${infer K}=${infer V}` ? { [x in K]: V } : object

type MergeValues<V1 extends unknown | unknown[], V2 extends unknown | unknown[]> =
  V1 extends unknown[]
    ? V2 extends unknown[]
      ? [...V1, ...V2]
      : [...V1, V2]
    : V2 extends unknown[]
      ? [V1, ...V2]
      : [V1, V2]

type Merge<T extends object, K extends object, TT = T, KK = K>
  = T extends T ? {
    readonly [Key in (keyof T | keyof K)]: Key extends keyof TT
      ? Key extends keyof KK
        ? MergeValues<TT[Key], KK[Key]>
        : TT[Key]
      : Key extends keyof KK
        ? KK[Key]
        : never
  } : never

export type QueryParse<Str extends string>
  = Str extends `${infer SingleQueryStr}&${infer Rest}`
    ? Merge<QueryParseSingle<SingleQueryStr>, QueryParse<Rest>>
    : QueryParseSingle<Str>

type tests = [
  QueryParse<'a=1'>,
  QueryParse<'a='>,
  QueryParse<'a=1&b=2&'>,
  QueryParse<'a=1&b=2&c=3'>,
  QueryParse<'a=1&b=2&b=3'>,
]
