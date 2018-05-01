import { Component } from '@angular/core';

@Component({
  selector: 'calculator-component',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
  result=0;

  onCalculate(){
    let n1=(<HTMLInputElement>document.getElementById("input1")).value;
    let n2=(<HTMLInputElement>document.getElementById("input2")).value;
    this.result=Number(n1)+Number(n2);
    console.log(this.result);
  }
}
