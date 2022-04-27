
type ArrToUnion<Arr extends unknown[]> =
  Arr extends [infer First, ...infer Rest]
    ? First | ArrToUnion<Rest>
    : []

type BemUnion<Block extends string, Elements extends string, Modifiers extends string>
  = Elements extends Elements
    ? Modifiers extends Modifiers
      ? `${Block}__${Elements}--${Modifiers}`
      : `${Block}__${Elements}`
    : Block

export type Bem<Block extends string, Elements extends string[], Modifiers extends string[]>
  = BemUnion<Block, ArrToUnion<Elements> & string, ArrToUnion<Modifiers> & string>

type R = Bem<'block', ['e1', 'e2'], ['m1', 'm2']>
type R1 = Bem<'block', ['e1', 'e2'], []>

// ----------------
export type BEM<Block extends string, Elements extends string[], Modifiers extends Str[]>
  = `${Block}__${Elements[number]}--${Modifiers[number]}`

type R3 = BEM<'block', ['e1', 'e2'], ['m1', 'm2']>