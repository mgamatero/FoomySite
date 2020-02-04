import { Component, OnInit } from '@angular/core';
// import {InputTextModule} from 'primeng/inputtext';
// import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
test:string;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
  }

  onLogout() {
    console.log('loggedout')

    this.afAuth.auth
      .signOut();
      this.router.navigate(["/"])
      window.alert('You are logged out')
  }
}
