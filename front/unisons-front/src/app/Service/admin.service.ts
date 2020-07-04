import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../config/constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Video } from '../video';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  public addVideo(video: Video): Observable<any> {
    const url = `${API_URL}/video`;
    console.log(video);
    return this.httpClient.post(url, video);
  }

  public getVideos(): Observable<any>{
    const url = `${API_URL}/video`;
    return this.httpClient.get(url);
  }
}
