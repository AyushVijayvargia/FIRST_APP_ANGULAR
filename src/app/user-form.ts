import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="submitForm()" #f="ngForm">
      <label>Name:
        <input name="name" [(ngModel)]="user.name" required />
      </label>
      <div *ngIf="f.submitted && !user.name" style="color:red">Name is required</div>
      <br />
      <label>Email:
        <input name="email" [(ngModel)]="user.email" required email />
      </label>
      <div *ngIf="f.submitted && (!user.email || !f.controls.email?.valid)" style="color:red">Valid email is required</div>
      <br />
      <button type="submit">Submit</button>
    </form>
  `
})
export class UserForm {
  @Input() user = { name: '', email: '' };
  @Output() formSubmit = new EventEmitter<any>();

  submitForm() {
    this.formSubmit.emit(this.user);
  }
}
