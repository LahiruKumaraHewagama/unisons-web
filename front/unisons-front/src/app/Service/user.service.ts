import { Injectable } from '@angular/core';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private email: string = 'admin@gmail.com';
  public user: User;
  constructor() {}

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    return (this.email = email);
  }
}
