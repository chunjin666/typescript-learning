// type t = ('1' | '2') & ('2' | '3')
type Copy<Obj> = {
  [Key in keyof Obj]: Obj[Key]
}
export type Defaultize<A, B> =
  Copy<
    & Pick<A, Exclude<keyof A, keyof B>>
    & Partial<Pick<A, keyof A & keyof B>>
    & Partial<Pick<B, Exclude<keyof B, keyof A>>>
  >

type A = {
  aaa: 111,
  bbb: 222,
}
type B = {
  bbb: 222,
  ccc: 333,
}

type Result = Defaultize<A, B>