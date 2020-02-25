import { Component, OnInit } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormGroup, FormControl, Validators } from "@angular/forms";

// import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "../services/auth.service";

import { auth } from "firebase/app";
import { Router } from "@angular/router";

import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

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
    private afAuth: AuthService,
    private router: Router,
    private messageService: MessageService
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

  onEmailLogIn() {
    console.log("Email Login");
    this.afAuth
      .emailLogin(this.loginForm.value.email, this.loginForm.value.password)
      // .signInWithEmailAndPassword(this.email, this.password)
      .then(success => {
        console.log("Success email");
        this.messageService.add({
          severity: "success",
          summary: "You are logged in"
        });
        this.router.navigate(["/"]);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  onGoogleLogin() {
    this.afAuth.googleLogin().then(success => {
      console.log("Google Login");
      this.messageService.add({
        severity: "success",
        summary: "You are logged in"
      });
      this.router.navigate(["/"]);
    });
  }
}
