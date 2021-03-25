const myName: string = 'da shuai bi';
const myAge: number = 18;
const success: boolean = true;
// 注意首字母小写，
// 虽然String,Number,Boolean也是可以的，但不推荐用，它指向了特殊的内置类型(special built-in types)


// 或者省略类型注解的写法
let myName2 = 'da shuai bi';
// 注意这里类型推论出来跟上面一个变量是不一样的
const myName3 = 'da shuai bi';
const myAge2 = 18;
const success2 = true;

// 编辑器能正确推断name变量类型为string
myName2 = myName2.replace(' ', '_');
