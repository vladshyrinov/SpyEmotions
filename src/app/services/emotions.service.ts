import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmotionsService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getEmotions(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/Emotions/GetEmotions');
  }

  setImage(body: any): Observable<any> {
    return this.http.post(this.baseUrl + '/api/Emotions/PostImageGetEmotions', body);
  }

}
