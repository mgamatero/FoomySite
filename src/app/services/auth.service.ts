import { Injectable } from "@angular/core";
// import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
import { LoginComponent } from "../login/login.component";
import { stringify } from "querystring";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        userData => resolve(userData),
        err => reject(err)
      );
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  googleLogin() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(success=>{
        console.log('Google logged in')
      })
      .catch(err=>{
        console.log(err)
      });
    });
  }
}
