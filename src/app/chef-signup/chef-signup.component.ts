import { Component, OnInit } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { RadioButtonModule } from "primeng/radiobutton";
import { SelectItem } from "primeng/api";
import { JsonPipe } from "@angular/common";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from "@angular/forms";
import { ChefService } from "../services/chef.service";

import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

import { FoomiesService } from "../services/foomies.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-chef-signup",
  templateUrl: "./chef-signup.component.html",
  styleUrls: ["./chef-signup.component.css"]
})
export class ChefSignupComponent implements OnInit {
  chefForm: FormGroup;
  days: FormArray;

  constructor(
    private router: Router,
    private afAuth: AuthService,
    private foomiesService: FoomiesService,
    private fb: FormBuilder,
    private chefService:ChefService
  ) {}

  ngOnInit() {
    this.chefForm = this.fb.group({
      isChef: [true],
      image: ["http://www.free-icons-download.net/images/chef-icons-71277.png"],
      name: [""],
      city: [""],
      state: [""],
      availableDays: [this.days],
      // availableDays: this.fb.array([
      //   this.fb.control('')
      // ]) ,
      availableTimes: [""],
      contactEmail: [""],
      contactPhone: [""],
      misc: [""],
      id:this.afAuth.currentUserInfo.uid as string
    });
  }

  onClickChefCreate() {
    console.log('From chef-signup onClickChefCreate() ===> ',this.chefForm.value);
    this.chefService.createChef(this.chefForm.value);
    this.chefService.createChef("id:this.afAuth.currentUserInfo.uid");
  }

  onClickChefCancel() {
    console.log("click Cancel");
    // // this.router.navigate(["/"]);
  }

  availDaysClick() {
    console.log();
    // if(event.target.checked){
    //   //add
    //   console.log('click')
    //   this.chefForm.value.availableDays.push(new FormControl(event.target.value))
    // }
    // else{
    //   let i = 0;

    //   this.chefForm.value.availableDays.array.forEach(element => {
    //     if (element.value == event.target.value) {
    //       //remove
    //       this.chefForm.value.availableDays.remove(i);
    //       return
    //     }
    //     i++;
    //   });
    // }
  }
}
