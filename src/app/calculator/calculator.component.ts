import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  number1: number = 0;
  number2: number = 0;
  number3: number = 0;
  number4: number = 0;
  number5: number = 0;
  number6: number = 0;


  result: number | null = null;

  multiply() {
    this.result = this.number1 * this.number2 * this.number3 * this.number4 * this.number5 * this.number6;
  }
}
