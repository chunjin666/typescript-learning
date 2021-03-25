function padLeft(padding: number | string, input: string) {
  return new Array(padding + 1).join(" ") + input;
  // Operator '+' cannot be applied to types 'string | number' and 'number'.
}

// 报错意思是说不能把 一个即可能是 number 又可能是 string 的数和一个 number 进行 + 操作
// 那我们想到了分2种情况来处理
function padLeft2(padding: number | string, input: string) {
  if (typeof padding === "number") {
    // 果然加了 判断之后，这里 padding 就被认为是 number类型了
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}