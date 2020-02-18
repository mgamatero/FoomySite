import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { ChefService } from "../services/chef.service";
import { FoomiesService } from "../services/foomies.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  isUserAChef: boolean;
  constructor(
    // public afAuth: AngularFireAuth,
    public afAuth: AuthService,
    private router: Router,
    private messageService: MessageService,
    public foommiesService: FoomiesService,
    private chefService: ChefService
  ) {}

  ngOnInit() {}

  onLogout() {
    this.afAuth.logout();
    this.messageService.add({
      severity: "info",
      summary: "You are logged out"
    });
    this.router.navigate([""]);
  }
}
