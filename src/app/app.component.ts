import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AglrPF';


  constructor(private loginService:LoginService){}

  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyA6uLsvUP52jNRfJCB-TbonDi-FNtON2VY",
      authDomain: "porfolio10v.firebaseapp.com",    
    });
  }

  getIdToken(){
    return this.loginService.getIdToken();
  }

  logout(){
    return this.loginService.logOut();
  }
}
