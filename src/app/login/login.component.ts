import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService){}

  login(form:NgForm){
    const user=form.value.user;
    const pass=form.value.pass;

    this.loginService.login(user,pass)
  }
}
