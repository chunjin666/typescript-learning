// type MyCapitalize<Str extends string> = 
//   Str extends `${infer Head}${infer Rest}`
//     ? `${Uppercase<Head>}${Rest}`
//     : Str
export type KebabCaseToCamelCase<Str extends string> =
  Str extends `${infer Prefix}-${infer Middle}${infer Suffix}`
    ? `${Prefix}${Capitalize<Middle>}${KebabCaseToCamelCase<Suffix>}`
    : Str

export type KebabCaseToCamelCase2<Str extends string> =
  Str extends `${infer Left}-${infer Right}`
    ? `${Left}${KebabCaseToCamelCase2<Capitalize<Right>>}`
    : Str

type tests = [
  KebabCaseToCamelCase<'abc-def-gh'>
]