// 约束了参数 key 必须为参数 obj 的键值
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m"); // Error 没有键值"m"


// ----------------------------------------------

interface Lengthwise {
  length: number;
}
// 约束了参数 arg 必须符合 Lengthwise 接口
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity(3); // 类型错误


// 转换为模块，防止命名冲突
export default 0;
