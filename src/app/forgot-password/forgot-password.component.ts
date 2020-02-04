import { Component, OnInit } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private afs: AngularFireAuth, private router: Router) {}

  ngOnInit() {}


}
