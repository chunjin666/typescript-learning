export type DeepReadonly<T extends object> = T extends object
  ? T extends Function
    ? T
    : {
        readonly [Key in keyof T]: T[Key] extends object ? DeepReadonly<T[Key]> : T[Key]
      }
  : T

type Obj = {
  a: {
    b: {
      c: {
        f: () => 'dong'
        d: {
          e: {
            guang: string
          }
        }
      }
    }
  }
}
type R = DeepReadonly<Obj>

// --------------------------
// ts 只有类型被用到的时候才会做类型计算

type DeepReadonly2<Obj extends Record<string, any>> =
    Obj extends any
        ? {
            readonly [Key in keyof Obj]:
                Obj[Key] extends object
                    ? Obj[Key] extends Function
                        ? Obj[Key] 
                        : DeepReadonly2<Obj[Key]>
                    : Obj[Key]
        }
        : never;