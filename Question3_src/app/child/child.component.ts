import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [StringService, NumberService]
})
export class ChildComponent {
  public PrimeNo : string = "";
  public Count : number = 0;
  constructor(private obj : StringService, private obj1 : NumberService) {
    this.PrimeNo = this.obj1.ChkPrime(10);
    this.Count = this.obj.CountCapital("Marvellous Infosystems");
  }

}
