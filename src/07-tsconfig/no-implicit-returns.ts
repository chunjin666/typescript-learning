// 当有的分支有返回值，有的分支没有时会报warning
function foo(value: number) {
  if (value === 0) {
    return '0';
  } else if (value > 0) {
    return '1';
  } else if (value < 0) {
    return '-1';
  }
  // return '';
}

function foo2(value: number) {
  if (value === 0) {
    console.log(0);
  } else if (value > 0) {
    console.log(1);
  } else if (value < 0) {
    console.log(-1);
  }
  return '';
}