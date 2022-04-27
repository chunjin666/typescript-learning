export type RemoveIndexSignature<T extends Record<string, any>> = {
  [Key in keyof T as string extends Key ? never : Key]: T[Key]
}

type R = RemoveIndexSignature<{ [x: string]: any; sleep(): void }>

// -------------------
type RemoveIndexSignature2<Obj extends Record<string, any>> = {
  [
      Key in keyof Obj 
          as Key extends `${infer Str}`? Str : never
  ]: Obj[Key]
}
