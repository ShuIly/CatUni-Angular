import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Fact } from './fact';

@Injectable()
export class FactService {

  constructor(private http: HttpClient) { }

  reqFact(): Observable<Fact> {

    return this.http.get<Fact>('https://catfact.ninja/fact');
  }
}
