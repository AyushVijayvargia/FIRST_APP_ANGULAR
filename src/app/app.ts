import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { CounterChild } from './counterinputoutput/counterinputoutput';
import { UserForm } from './user-form';
import { NgIf, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Counter,CounterChild,UserForm,NgIf,JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first_app_angular';
  parentValue = 42;
  message = '';
  user = { name: '', email: '' };
  submittedUser: any = null;

  onNotify(msg: string) {
    this.message = msg;
  }

  onFormSubmit(user: any) {
    this.submittedUser = user;
  }
}
