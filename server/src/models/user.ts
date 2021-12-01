export interface IUser {
  id?: "",
  name?: "",
  email?: "",
  password?: "",
  password_confirmation?: ""
}

export default class User {
  attributes: IUser;

  constructor(attributes: IUser) {
    this.attributes = attributes;
  }

  register(): void {
    
  }

  login(): void {

  }
}