import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    private greetUrl = 'http://localhost:5000';

    // Resolve HTTP using the constructor
    constructor(private http: Http) { }

    sayHello(): Observable<any> {
        return this.http.get(this.greetUrl + '/api/Hello/greetings').map((response: Response) => {
            return response.text();
        });
    }
}
