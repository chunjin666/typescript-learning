export type GetRequired<T extends Record<string, any>> = {
  [Key in keyof T as undefined extends T[Key] ? never : Key]: T[Key]
}

type R = GetRequired<{ name: string; avatar?: string }>

// --------------------
type isRequired<Key extends keyof Obj, Obj> = {} extends Pick<Obj, Key> ? never : Key

type GetRequired2<Obj extends Record<string, any>> = {
  [Key in keyof Obj as isRequired<Key, Obj>]: Obj[Key]
}
