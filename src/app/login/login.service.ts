import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

@Injectable()
export class LoginService{

    constructor(private router:Router,private cookie:CookieService){}

    token:string='';

    login(email:string,password:string){
        
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            resposne=>{

                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token=token;
                        this.cookie.set("token",this.token)
                        this.router.navigate(['/']);
                    }
                )
            }
        );
    }

    getIdToken(){
        return this.cookie.get("token");
    }
    
    logOut(){
        firebase.auth().signOut().then(()=>{
            this.token="";
            this.cookie.set("token",this.token)
            this.router.navigate(['/']);
            window.location.reload();
        });
    }

}