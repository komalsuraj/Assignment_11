import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {
  constructor() { }

  Addition(a: any, b: any) {
    return a + b;
  }

  Substraction(a: any, b: any) {
    return a - b;
  }
}
