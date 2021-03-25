const someObj = {
  x: 0,
  y: '',
}

// 这里的typeof 跟js中的是不一样的，这是获取对象值的类型
type ErrKeyofSomeObj = keyof someObj; // Error
type KeyofSomeObj = keyof typeof someObj; // Ok: 'x' | 'y'
