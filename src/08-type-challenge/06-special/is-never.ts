export type IsNever<T> = [T] extends [never] ? true : false

type R1 = IsNever<never>
type R2 = IsNever<number>
