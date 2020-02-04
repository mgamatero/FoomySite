import { Component, OnInit } from '@angular/core';
// import {InputTextModule} from 'primeng/inputtext';
// import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';


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
    private messageService: MessageService
    ) { }

  ngOnInit() {
  }

  onLogout() {
    console.log('loggedout')

    this.afAuth.auth
      .signOut();

        this.messageService.add({severity:'info', summary:'You are logged out'});

      this.router.navigate(["/"])
      // window.alert('You are logged out')
  }
}
