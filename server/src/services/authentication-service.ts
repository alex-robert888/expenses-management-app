import User from '../models/user';

export default class AuthenticationService {
  user: User;
  
  constructor(user: User) {
    this.user = user;
  }


}