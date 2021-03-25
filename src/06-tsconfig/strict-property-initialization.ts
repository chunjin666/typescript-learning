class UserAccount {
  name: string;
  accountType = "user";

  email: string;

  address: string | undefined;

  constructor(name: string) {
    this.name = name;
    // Note that this.email is not set
  }
}
