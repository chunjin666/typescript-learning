type Join<T extends string[], Delimiter extends string, R extends string = ''> =
  T extends [...infer Front, infer Last]
    ? Front['length'] extends 0
      ? `${Last & string}${R}`
      : Join<Front extends string[] ? Front : [], Delimiter, `${Delimiter}${Last & string}${R}`>
    : R

function join<Delimiter extends string>(delimiter: Delimiter): <T extends string[]>(...args: T) => Join<T, Delimiter> {
  return function(...args: string[]): any {
    return args.join(delimiter)
  }
}

const res = join('-')('a', 'b', 'c')