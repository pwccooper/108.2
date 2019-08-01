import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList : User [] = [];

  constructor(
  var user = new User();
  user.email = 'admin@mail.com';
  user.password = 'emerica12';
  user.firstName = 'admin';
  ) { }

public saveUser(user : User){
 this.userList.push(user);
}

public getAllUsers(){
  return this.userList;
}
}
