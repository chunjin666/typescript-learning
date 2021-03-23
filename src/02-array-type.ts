let stringList: string[];
let numberList: number[];
let boolList: boolean[];

// 泛型的写法，一般用上面的用法就好了
let stringList2: Array<string>;
let numberList2: Array<number>;
let boolList2: Array<boolean>;

// 这些是元组Tuple，是不是有种什么类型都能定义的赶脚
let stringTuple: [string] = ["test"];
let stringNumberTuple: [string, number] = ["hour", 12];
