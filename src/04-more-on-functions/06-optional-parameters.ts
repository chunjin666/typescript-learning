function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK

// 一样的用法
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
