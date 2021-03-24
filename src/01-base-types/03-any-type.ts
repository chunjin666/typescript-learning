// 变量默认就是any类型
let defaultAny;

// any任意类型，可以和其他类型相互赋值，可以当成任意类型使用
let anyObj: any = {
  x: 0,
};
let stringValue = "test";
// 仅供演示，千万不要这么写，会被打死
// any stirng 相互赋值
stringValue = anyObj;
anyObj = stringValue;
// 甚至当成函数使用也不报错
anyObj();

// any大法几乎可以解决你刚使用TypeScript时遇到的大部分问题
// 不过还是应该慎用，要不然就失去了使用TypeScript的意义
