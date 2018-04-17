import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Fact } from './fact';

@Injectable()
export class FactService {

  constructor(private http: HttpClient) { }

  reqFact(): Observable<any> {
    return this.http.get<any>('http://api.icndb.com/jokes/random');
  }
}
