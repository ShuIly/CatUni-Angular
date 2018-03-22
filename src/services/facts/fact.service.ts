import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Fact } from './fact';

@Injectable()
export class FactService {

  constructor() { }

  getFacts(): Observable<Fact> {
    return 
  }
}
