export type Curried<F extends (...args: any) => any>
  = Parameters<F> extends [infer Head, ...infer Rest]
    ? (arg: Head) => Curried<(...args: Rest) => ReturnType<F>>
    : never

type func = (a: string, b: number, c: boolean) => void

type result = Curried<func>
