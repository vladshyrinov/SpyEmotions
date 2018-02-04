import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmotionsService {
  // private baseUrl = 'http://localhost:58277';
  private baseUrl = 'https://spyemotions.azurewebsites.net';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST'})
  };

  constructor(private http: HttpClient) { }

  getEmotions(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/Emotions/GetEmotions');
  }

  setImage(body: any): Observable<any> {
    return this.http.post(this.baseUrl + '/api/Emotions/PostImageGetEmotions', body, this.httpOptions);
  }

}
