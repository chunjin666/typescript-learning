type TPerson = {
  name: string;
  age: number;
  // 只读属性
  readonly gender: number;
  // 可选属性，会被推断为 string | undefined
  hobby?: string;
}

const p2: TPerson = {} as TPerson;
p1.gender = 1 // Error
p1.hobby.substr(0) // Error
p1.hobby?.trim() // 编辑器甚至可以自动帮你加上?号