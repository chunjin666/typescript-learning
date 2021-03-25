export enum RoleEnum {
  Boss,
  DepartmentManger,
  TeamLeader,
  Member,
}

// TODO User -> IUser
export interface User {
  // TODO name -> nickname
  name: string
  age: number
  phone: string
  // TODO add role property
  // role: RoleEnum
  email?: string
}
