import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../config/constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/user';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  //login
  public login(email: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('email', email);
    const url = `${API_URL}/user/login`;
    return this.httpClient.get(url, { params: params });
  }

  // add_user
  public addUser(user: User): Observable<any> {
    const url = `${API_URL}/user`;
    console.log(user);
    return this.httpClient.post(url, user);
  }


}
