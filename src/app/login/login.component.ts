import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  display = {
    login: true,
    signup: false,
    reset: false
  };
  constructor() { }

  ngOnInit(): void {
  }

  displaySignup(): void {
    this.display.login = false;
    this.display.signup = true;
  }

  displayReset(): void {
    this.display.login = false;
    this.display.reset = true;
  }

  displayBack(): void {
    this.display = {
      login: true,
      signup: false,
      reset: false
    };
  }

}
