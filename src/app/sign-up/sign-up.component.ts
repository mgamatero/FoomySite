import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup; //Reactive forms

  email: string;
  password: string;

  constructor(private afs: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\d{10,12}/)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });

    this.afs.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem("user", JSON.stringify(userResponse));
      } else {
        localStorage.setItem("user", null);
      }
    });
  }

  onRegister() {
    this.afs.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(success => {

      })
      .then(userInfo=>{
        window.alert(`account created - logged in as ${this.isUserLoggedIn()}`); //not working
      })
      .catch(err => {
        window.alert(err.message);
        this.router.navigate(['sign-up'])
      });
  }

  isUserLoggedIn() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
