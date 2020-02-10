import { Component, OnInit } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { RadioButtonModule } from "primeng/radiobutton";
import { SelectItem } from "primeng/api";
import { JsonPipe } from "@angular/common";

import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

import{ FoomiesService} from "../services/foomies.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-chef-signup",
  templateUrl: "./chef-signup.component.html",
  styleUrls: ["./chef-signup.component.css"]
})
export class ChefSignupComponent implements OnInit {
  chef_form_value = {
    isChef: true,
    image: "http://www.free-icons-download.net/images/chef-icons-71277.png",
    name: "",
    city: "",
    state: "",
    availableDays: "",
    availableTimes: "",
    contactEmail: "",
    contactPhone: "",
    misc: ""
  };

  constructor(private router: Router, private afAuth: AuthService, private foomiesService:FoomiesService) {}

  ngOnInit() {}

  onClickChefCreate() {
    let currId = this.afAuth.currentUserInfo.uid;
    console.log(currId);
    this.foomiesService.createChef(this.chef_form_value);
  }

  onClickChefCancel() {
    console.log('click')
    this.foomiesService.isUserAChef();
    // this.router.navigate(["/"]);
  }
}

// this.foommyService.getFoommies().subscribe(foommy => {
//   // console.log(foommy)
//   this.foommyFromDB = foommy;
// });
