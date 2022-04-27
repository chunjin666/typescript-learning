type Copy<Obj extends object> = {
  [Key in keyof Obj]: Obj[Key]
}
export type PartialObjectPropByKeys<Obj extends object, Keys extends string> =
Copy<Partial<Pick<Obj, Keys & keyof Obj>> & Omit<Obj, Keys>>

interface User {
  name: string
  age: number
  address: string
}

type tests = PartialObjectPropByKeys<User, 'name' | 'age'>
