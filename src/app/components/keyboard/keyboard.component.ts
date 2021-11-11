import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})

export class KeyboardComponent {

  buttons = [
    {class: 'div1', name: 'x', value: 'x^1/2', index: '', prefix: '√', prefixIndex: ''},
    {class: 'div2', name: 'x', value: 'x^2', index: '2', prefix: '', prefixIndex: ''},
    {class: 'div3', name: '(', value: '(', index: '', prefix: '', prefixIndex: ''},
    {class: 'div4', name: ')', value: ')', index: '', prefix: '', prefixIndex: ''}, 
    {class: 'div5', name: '←', value: '←', index: '', prefix: '', prefixIndex: ''}, 
    {class: 'div6', name: '7', value: '7', index: '', prefix: '', prefixIndex: ''}, 
    {class: 'div7', name: '8', value: '8', index: '', prefix: '', prefixIndex: ''}, 
    {class: 'div8', name: '9', value: '9', index: '', prefix: '', prefixIndex: ''},
    {class: 'div9', name: '÷', value: '/', index: '', prefix: '', prefixIndex: ''},
    {class: 'div10', name: 'C', value: 'c', index: '', prefix: '', prefixIndex: ''},
    {class: 'div11', name: '4', value: '4', index: '', prefix: '', prefixIndex: ''},
    {class: 'div12', name: '5', value: '5', index: '', prefix: '', prefixIndex: ''},
    {class: 'div13', name: '6', value: '6', index: '', prefix: '', prefixIndex: ''},
    {class: 'div14', name: 'x', value: '*', index: '', prefix: '', prefixIndex: ''},
    {class: 'div15', name: '1', value: '1', index: '', prefix: '', prefixIndex: ''},
    {class: 'div16', name: '2',  value: '2', index: '', prefix: '', prefixIndex: ''},
    {class: 'div17', name: '=',  value: '=', index: '', prefix: '', prefixIndex: ''},
    {class: 'div18', name: '3',  value: '3', index: '', prefix: '', prefixIndex: ''},
    {class: 'div19', name: '-',  value: '-', index: '', prefix: '', prefixIndex: ''},
    {class: 'div21', name: '0',  value: '0', index: '', prefix: '', prefixIndex: ''},
    {class: 'div22', name: '±',  value: '+/-', index: '', prefix: '', prefixIndex: ''},
    {class: 'div22', name: '.',  value: '.', index: '', prefix: '', prefixIndex: ''},
    {class: 'div22', name: '+',  value: '+', index: '', prefix: '', prefixIndex: ''},
  ]

  advancedButtons = [
    {class: 'div1', name: '2', value: '', index: 'nd', prefix: '', prefixIndex: ''},
    {class: 'div2', name: 'π', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div3', name: 'e', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div4', name: '!', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div5', name: 'x', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div6', name: 'sin', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div7', name: 'sinh', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div8', name: 'cot', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div9', name: 'x', value: '', index: '', prefix: '√', prefixIndex: 'y'},
    {class: 'div10', name: 'x', value: '', index: 'y', prefix: '', prefixIndex: ''},
    {class: 'div11', name: 'cos', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div12', name: 'cosh', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div13', name: 'sec', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div14', name: 'x', value: '', index: '', prefix: '√', prefixIndex: '3'},
    {class: 'div15', name: 'x', value: '', index: '3', prefix: '', prefixIndex: ''},
    {class: 'div16', name: 'tan', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div17', name: 'tanh', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div18', name: 'csc', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div19', name: 'ln', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div20', name: 'e', value: '', index: 'x', prefix: '', prefixIndex: ''},
    {class: 'div21', name: 'ncr', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div22', name: 'npr', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div23', name: '%', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div24', name: 'log', value: '', index: '', prefix: '', prefixIndex: ''},
    {class: 'div25', name: '10', value: '', index: 'x', prefix: '', prefixIndex: ''},
  
  ]

  displayValue:string[] = [];
  result:any = '0';


  addValue(name: any) {

    if(this.result === '0') {
      this.result = ''
    }
    console.log(name);
    console.log('result: ' + this.result);
    console.log('display: ' + this.displayValue);

    if(name !== '←' && name !== 'c' && name !== '=') {
      this.displayValue.push(name);
    }else if(name === 'c') {
      this.displayValue = [];
    }else if(name === '←') {
      this.displayValue = this.displayValue.slice(0, -1)
    }
    
    if(name === 'c') {
      this.result = ''
    }else if(name === '←') {
      this.result = this.result.slice(0, -1) && this.displayValue.join('');
    }else if(name === 'x^2') {
      this.result = Math.pow(this.result, 2);
    }else if(name === 'x^1/2') {
      this.result = Math.sqrt(this.result);
    }else if(name === '=') {
     try {
      this.result = eval(this.result);
      this.displayValue.push('=' + eval(this.result));
     } catch (error) {
      this.result = error;
      this.displayValue.push(this.result);
      this.displayValue = [];
      this.displayValue = ['Eror'];
     }
      ;
    }else {
      this.result += name;
    };
  }
}
