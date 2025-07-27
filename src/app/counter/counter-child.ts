import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter-child',
  standalone: true,
  template: `
    <p>Value from parent: {{ value }}</p>
    <button (click)="notifyParent()">Notify Parent</button>
  `
})
export class CounterChild {
  @Input() value: number = 0;
  @Output() notify = new EventEmitter<string>();

  notifyParent() {
    this.notify.emit('Child says hello!');
  }
}
