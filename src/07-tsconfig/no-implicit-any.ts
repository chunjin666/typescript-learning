// noImplicitAny 选项开启后，如果有隐式的any类型会报错：
function logMe(x) {
  console.log(x);
}

class AnyClass {
  a
}

// 这个隐式any类型不会被检测出来
let anyValue;
anyValue = 'test';
anyValue = 1;