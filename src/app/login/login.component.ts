import { Component, OnInit } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
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
    private authService: AuthService,
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



  onSubmit() {
    console.log('click submit')

    this.authService
      .login(this.email, this.password)
      .then(res => {
             console.log('Logged in')
        this.router.navigate(["/"]);
      })
      .catch(err => {
            console.log('NOT Logged in', err.message)
      });
  }
}
