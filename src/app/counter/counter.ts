import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  count :number =0;

  increment()
  {
    this.count++;//increase
  }
decrement()
  {
    this.count--;//decrease
  }
}
