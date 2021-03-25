// 虽然有点小尴尬，但是我们发现了js 里面的 typeof 也可以用来做窄化
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) { // Error: Object is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}