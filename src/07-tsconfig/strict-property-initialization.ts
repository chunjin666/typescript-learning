class UserAccount {
  name: string;
  accountType = "user";

  email: string;

  // 设置为可选属性，不报错
  phone?: string;
  // 添加 undefined 联合类型，不报错
  address: string | undefined;

  constructor(name: string) {
    // 设置了name，不报错
    this.name = name;
    // Note that this.email is not set
  }
}
