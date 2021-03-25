import { User } from './01-refactor';

const newUser: User = {
  name: 'xxx',
  age: 1,
  phone: '',
}

console.log(newUser.name, newUser.age);

function doSomethingWithUser(u: User) {
  if (u.name) {
    console.log(u.name)
  }
}