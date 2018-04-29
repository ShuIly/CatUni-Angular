import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FactService {

  constructor(
    private http: HttpClient,
  ) { }

  reqFact(): Observable<any> {
    // return this.http.get<any>('http://localhost:8080/api/catFact/');
    return this.http.get<any>('https://catuni.herokuapp.com/api/catFact/');
  }
}
