import { Component, OnInit } from '@angular/core';
// import {InputTextModule} from 'primeng/inputtext';
// import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { AuthService } from "../services/auth.service";
import { FoomiesService } from "../services/foomies.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

//This all goes in auth service
// import { AngularFireAuth } from "@angular/fire/auth";
// import { auth } from "firebase/app";

import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

isUserAChef:boolean;
  constructor(
    // public afAuth: AngularFireAuth,
    public afAuth: AuthService,
    private router: Router,
    private messageService: MessageService,
    public foommiesService: FoomiesService
    ) { }

  ngOnInit() {
this.foommiesService.isUserAChef()
   }



  onLogout() {
    this.afAuth.logout()
        this.messageService.add({severity:'info', summary:'You are logged out'});
      this.router.navigate([""])
    }

 }
