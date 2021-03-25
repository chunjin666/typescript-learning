type ToArray<Type> = Type extends any ? Type[] : never;

// string | number ===> string[] | number[]
type StrArrOrNumArr = ToArray<string | number>;
//   ^ = type StrArrOrNumArr = string[] | number[]