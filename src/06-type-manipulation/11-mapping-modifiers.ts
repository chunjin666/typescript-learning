// 去掉一个类型的属性的只读特性
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
//   ^ = type UnlockedAccount = {
//       id: string;
//       name: string;
//   }

// ----------------------------------------------------------
// 去掉一个类型的属性的可选特性
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
//   ^ = type User = {
//       id: string;
//       name: string;
//       age: number;
//   }


export default 0;