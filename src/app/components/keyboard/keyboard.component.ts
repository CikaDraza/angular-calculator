import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})

export class KeyboardComponent implements OnInit {
  buttons = [
    {class: 'div1', value: 'x', index: '', prefix: '√', prefixIndex: ''},
    {class: 'div2', value: 'x', index: '2', prefix: '', prefixIndex: ''},
    {class: 'div3', value: '(', index: '', prefix: '', prefixIndex: ''},
    {class: 'div4', value: ')', index: '', prefix: '', prefixIndex: ''}, 
    {class: 'div5', value: '←', index: '', prefix: '', prefixIndex: ''}, 
    {class: 'div6', value: '7', index: '', prefix: '', prefixIndex: ''}, 
    {class: 'div7', value: '8', index: '', prefix: '', prefixIndex: ''}, 
    {class: 'div8', value: '9', index: '', prefix: '', prefixIndex: ''},
    {class: 'div9', value: '÷', index: '', prefix: '', prefixIndex: ''},
    {class: 'div10', value: 'c', index: '', prefix: '', prefixIndex: ''},
    {class: 'div11', value: '4', index: '', prefix: '', prefixIndex: ''},
    {class: 'div12', value: '5', index: '', prefix: '', prefixIndex: ''},
    {class: 'div13', value: '6', index: '', prefix: '', prefixIndex: ''},
    {class: 'div14', value: 'x', index: '', prefix: '', prefixIndex: ''},
    {class: 'div15', value: '1', index: '', prefix: '', prefixIndex: ''},
    {class: 'div16', value: '2', index: '', prefix: '', prefixIndex: ''},
    {class: 'div17', value: '=', index: '', prefix: '', prefixIndex: ''},
    {class: 'div18', value: '3', index: '', prefix: '', prefixIndex: ''},
    {class: 'div19', value: '-', index: '', prefix: '', prefixIndex: ''},
    {class: 'div17', value: '=', index: '', prefix: '', prefixIndex: ''},
    {class: 'div21', value: '0', index: '', prefix: '', prefixIndex: ''},
    {class: 'div22', value: '±', index: '', prefix: '', prefixIndex: ''},
    {class: 'div22', value: '.', index: '', prefix: '', prefixIndex: ''},
    {class: 'div22', value: '+', index: '', prefix: '', prefixIndex: ''},
  ]

  advancedButtons = [
    {class: 'div1', value: '2', index: 'nd', prefix: '', prefixIndex: ''},
    {class: 'div2', value: 'π', index: '', prefix: '', prefixIndex: ''},
    {class: 'div3', value: 'e', index: '', prefix: '', prefixIndex: ''},
    {class: 'div4', value: '!', index: '', prefix: '', prefixIndex: ''},
    {class: 'div5', value: 'x', index: '', prefix: '', prefixIndex: ''},
    {class: 'div6', value: 'sin', index: '', prefix: '', prefixIndex: ''},
    {class: 'div7', value: 'sinh', index: '', prefix: '', prefixIndex: ''},
    {class: 'div8', value: 'cot', index: '', prefix: '', prefixIndex: ''},
    {class: 'div9', value: 'x', index: '', prefix: '√', prefixIndex: 'y'},
    {class: 'div10', value: 'x', index: 'y', prefix: '', prefixIndex: ''},
    {class: 'div11', value: 'cos', index: '', prefix: '', prefixIndex: ''},
    {class: 'div12', value: 'cosh', index: '', prefix: '', prefixIndex: ''},
    {class: 'div13', value: 'sec', index: '', prefix: '', prefixIndex: ''},
    {class: 'div14', value: 'x', index: '', prefix: '√', prefixIndex: '3'},
    {class: 'div15', value: 'x', index: '3', prefix: '', prefixIndex: ''},
    {class: 'div16', value: 'tan', index: '', prefix: '', prefixIndex: ''},
    {class: 'div17', value: 'tanh', index: '', prefix: '', prefixIndex: ''},
    {class: 'div18', value: 'csc', index: '', prefix: '', prefixIndex: ''},
    {class: 'div19', value: 'ln', index: '', prefix: '', prefixIndex: ''},
    {class: 'div20', value: 'e', index: 'x', prefix: '', prefixIndex: ''},
    {class: 'div21', value: 'ncr', index: '', prefix: '', prefixIndex: ''},
    {class: 'div22', value: 'npr', index: '', prefix: '', prefixIndex: ''},
    {class: 'div23', value: '%', index: '', prefix: '', prefixIndex: ''},
    {class: 'div24', value: 'log', index: '', prefix: '', prefixIndex: ''},
    {class: 'div25', value: '10', index: 'x', prefix: '', prefixIndex: ''},
  
  ]

  displayValue:string = '';
  private  prevInput: string = '';
  private  input:string = '';
  result:string = '0';

  pressBtn(value: string) {
  console.log(this.input);
  console.log(this.prevInput);
  console.log(this.result);

  if(this.result !== '') {
    this.prevInput = this.input;
    this.input = value;
  }

  
  if(value === 'c') {
    this.result = ''
  }else if(value === '←') {
    this.result = this.prevInput !== '=' ? this.result.slice(0, -1) : this.result;
  }else if(value === '=') {
    this.result = eval(this.result);
  }else {
    this.result += value;
  };
    

    if (value == ".") {
      if (this.input !== "" ) {
        console.log(value);
      }
    }

    if(value == "0") {
      this.result = ''
      if(this.input == "" ) {
        
      }
    }
 
  
  }

  
  constructor() { }

  ngOnInit(): void {
  }
}
