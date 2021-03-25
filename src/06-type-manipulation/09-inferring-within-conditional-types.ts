// 在要推断的地方使用 infer 加一个待推论类型的代号，真值分支返回这个代号，假值分支返回其他
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;
//   ^ = type Num = number

type Str = GetReturnType<(x: string) => string>;
//   ^ = type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
//   ^ = type Bools = boolean[]



export default 0;