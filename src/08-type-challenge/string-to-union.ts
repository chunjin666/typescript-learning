export type StringToUnion<Str extends string>
  = Str extends `${infer S}${infer Rest}`
    ? S | StringToUnion<Rest>
    : never

type R = StringToUnion<'abcgsagte'>