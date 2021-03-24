// 获取2个有length属性对象中length最大的一个
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const value = longest([1, 2, 3], ['a', 'b', 'c', 'd', 4, 5, 6]);