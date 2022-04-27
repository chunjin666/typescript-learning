export type ClassPublicProps<T extends Record<string, any>> = {
  [Key in keyof T]: T[Key]
}

class User {
  public name: string
  protected age: number
  private hobbies: string[]
  constructor() {
    this.name = 'hello'
    this.age = 3
    this.hobbies = ['eat', 'sleep', 'code']
  }
}

type R = ClassPublicProps<User>
