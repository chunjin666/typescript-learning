type Point = { x: number; y: number };
type P = keyof Point;
type KeyofP = 'x' | 'y';
let p: P;
let p2: KeyofP = 'x';
p = p2; // 证明 keyof Point === 'x' | 'y'


type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
//   ^ = type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
//   ^ = type M = string | number


export default 0;
