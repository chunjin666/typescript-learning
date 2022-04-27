import { IsAny } from './is-any'
export type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)

export type IsEqual2<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false
