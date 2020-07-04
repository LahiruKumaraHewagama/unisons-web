import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { Observable } from 'rxjs';
import { API_URL } from '../config/constants';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private email: string = 'admin@gmail.com';
  public user: User;
  constructor(private httpClient: HttpClient) {}

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    return (this.email = email);
  }
  public addLike(video_id: any): Observable<any> {
    const url = `${API_URL}/like`;
    console.log({"video_id":video_id,"email":this.email});
    return this.httpClient.post(url, {"video_id":video_id,"email":this.getEmail()});
  }
  public getLikedVideo(): Observable<any> {
    let params = new HttpParams();
    params = params.set('email', this.getEmail());
    const url = `${API_URL}/like`;
    return this.httpClient.get(url, { params: params });
  }

  
}
