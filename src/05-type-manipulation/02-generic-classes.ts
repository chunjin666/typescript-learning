// @ts-nocheck
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

// 使用时在 class上设置 number 类型之后，zeroValue 属性以及 add 方法中的参数返回值自动获得了 number 类型
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 使用时在 class上设置 string 类型之后，zeroValue 属性以及 add 方法中的参数返回值自动获得了 string 类型
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
