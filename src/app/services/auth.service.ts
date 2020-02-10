import { Injectable } from "@angular/core";
// import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
import { LoginComponent } from "../login/login.component";
import { stringify } from "querystring";
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  loggedIn: boolean;
  currentUserInfo: any;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged(user=>{
      if(user){
        console.log('user logged in', user.email)
        this.loggedIn = true
        this.currentUserInfo = user
      }
      else {
        console.log('user logged out', user)
        this.loggedIn = false
    }
  })
  }

  emailLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        userData => {
          resolve(userData)
          console.log(userData)

        },
        err => reject(err)
      );
    });
  }

  logout() {
    this.afAuth.auth.signOut()
  }

  googleLogin() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(success=>{
        console.log('Google logged in', success)
      })
      .catch(err=>{
        console.log(err)
      });
    });
  }






}
