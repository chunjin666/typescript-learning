function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101);
printId("202");
// 想乱来，不行！！！
printId({ myID: 22342 });

// 自己也不能乱来
function printId2(id: number | string) {
  // 别急，你还不知道我是谁呢
  console.log(id.toUpperCase());
  // 这下知道了
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 稍复杂类型
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}

// 真够智能的啊
function getFirstThree(x: number[] | string) {
  // Array和string都有类型相同的slice方法
  return x.slice(0, 3);
}

// 还能精确到值
type ResultStatus = "success" | "failure";
// 来赋值一下看看，直接提示可选的值
let resultStatus: ResultStatus;