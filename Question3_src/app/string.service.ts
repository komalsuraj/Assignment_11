import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  public CountCapital(String1: any) : any {
    var Count : number = 0;
    for (var i = 0; i < String1.length; i++)
    {
        if (String1[i] >= 'A' && String1[i] <= 'Z')
          Count++;  
    }
    return Count;
  }
}
