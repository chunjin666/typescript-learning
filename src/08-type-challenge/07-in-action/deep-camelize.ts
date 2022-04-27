type DeepCamelizeTuple<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [DeepCamelize<First>, ...DeepCamelizeTuple<Rest extends unknown[] ? Rest : []>]
  : []

type ToCamelCase<Str extends string, R extends string = ''> = Str extends `${infer Left}${infer Right}`
  ? Left extends '_' | '-'
    ? `${R}${ToCamelCase<Capitalize<Right>>}`
    : `${R}${Left}${ToCamelCase<Right>}`
  : Str

export type DeepCamelize<Obj extends Record<string, any>> =
  Obj extends unknown[]
    ? DeepCamelizeTuple<Obj>
    : {
      [Key in keyof Obj as ToCamelCase<Key & string>]: Obj[Key] extends object
        ? DeepCamelize<Obj[Key]>
        : Obj[Key]
    }

type Obj = {
  aaa_bbb: string
  bbb_ccc: [
    {
      ccc_ddd: string
    },
    {
      ddd_eee: string
      eee_fff: {
        fff_ggg: string
      }
    }
  ]
}

type Result = DeepCamelize<Obj>
