type A = {
  a: string;
};
type AB = {
  a: number;
  b: number;
}
// 类型交叉时不报错
type AAB = A & AB;
let aab: AAB;
aab.a // never

interface C {
  c: string;
}
// Interface 继承冲突时会报错
interface CD extends C {
  c: number;
  d: number;
}

interface D {
  c: number;
  d: number;
}
// 其实Interface也可以交叉
type TCD = C & D;
