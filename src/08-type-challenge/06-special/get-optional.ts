export type GetOptional<T extends Record<string, any>>
  = {
    [
      Key in keyof T
        as {} extends Pick<T, Key> ? Key : never
    ]: T[Key]
  }

type R = GetOptional<{ name: string, avatar?: string }>

type R1 = {  } extends { age?: number } ? true : false
type R2 = { age: number } extends { age?: number } ? true : false
type R3 = { age: undefined } extends { age?: number } ? true : false