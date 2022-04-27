export type ReplaceAll<Str extends string, From extends string, To extends string>
  = Str extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${ReplaceAll<Suffix, From, To>}`
    : Str

type R = ReplaceAll<'algjalejgiajgoeoa', 'a', '.'>
