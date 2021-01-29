import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

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
  loginForm: FormGroup;
  signupForm: FormGroup;
  resetPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {

  }

  onSubmitLogin(): any {
    this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password);
    // console.log(this.loginForm.value.email);
  }

  onSubmitSignup(): any {
    this.authService.SignUp(this.signupForm.value.email, this.signupForm.value.password);
    // console.log(this.signupForm.value);
  }

  onSubmitResetPassword(): any {
    console.log(this.resetPasswordForm);
  }

  facebookAuth(): void {
    this.authService.FacebookAuth();
  }

  googleAuth(): void {
    this.authService.GoogleAuth();
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
