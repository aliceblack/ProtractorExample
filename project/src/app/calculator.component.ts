import { Component } from '@angular/core';

@Component({
  selector: 'calculator-component',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
  result=0;

  onCalculate(){
    let n1=Number((<HTMLInputElement>document.getElementById("input1")).value);
    let n2=Number((<HTMLInputElement>document.getElementById("input2")).value);
    this.result=this.calcSum(n1, n2);
    console.log(this.result);
  }

  calcSum(a, b){
    return a+b;
  }
}
