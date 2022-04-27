export type ReverseString<Str extends string>
  = Str extends `${infer First}${infer Rest}`
    ? `${ReverseString<Rest>}${First}`
    : Str

type R = ReverseString<'kdajglajgei'>