import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmaticService]
})
export class DemoComponent {
  public Addition : any;
  public Substraction : any;
  constructor(private obj : ArithmaticService) {
      this.Addition = obj.Addition(15, 10);
      this.Substraction = obj.Substraction(50, 20);
  }

}
