import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title:string = 'calc';
  total:number = 0;
  calculation:number = 0;
  message:string;
  magnitud:number = 10;
  stack:(number)[] = [];
  clear(){this.calculation=0; this.total=0; this.message ="cleared";this.stack =[];};
  add_number(value:number):void{
    
    this.calculation = (value) + ( this.calculation * this.magnitud);
    
    this.message =  this.magnitud.toString();
  };
  add(){this.stack.push((this.calculation));console.log(this.stack); this.calculation = 0; this.message = this.stack.toString();};
  solve():void{
    this.stack.push((this.calculation));
    let result:number = 0;
    const reducer = (accumulator, currentvalue) => accumulator + currentvalue;
    

    this.message = this.stack.reduce(reducer).toString();
    this.total = this.stack.reduce(reducer);
    
  }

  
  ngOnInit() {
    this.calculation=0;
  
}}

class Operations {
  negative(value:number):number{
    return value * -1;
  }

  sum(a:number, b:number):number{
    return a + b;
  }
  subtract(a:number, b:number):number{
    return a - b;
  }


  }