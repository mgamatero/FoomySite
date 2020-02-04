import { Component, OnInit } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FlashMessagesService } from "angular2-flash-messages";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; //Reactive forms
  email: string;
  password: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onEmailLogIn(){

  console.log('Email Login')
  this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
  .then(success=>{
    console.log('Success email')
    this.router.navigate(["/"])
  })
  .catch(err=>{
    console.log(err.message)
  })
}

  onGoogleLogin() {
    console.log('Google Login')
    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      this.router.navigate(["/"])
      window.alert('You are logged in')
   }
}
