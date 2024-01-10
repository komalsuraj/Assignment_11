import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public ChkPrime(No: any) {
    var result: any; 
    var Num = No/2;  
    for(let i=2; i<=Num; i++)    
    {    
      if(No%i == 0)    
      {     
        result = "Number is not prime"; 
      }
      else {
        result = "Number is prime";
      }
    return result;
    }
  }
}
