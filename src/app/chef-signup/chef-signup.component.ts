import { Component, OnInit } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectItem} from 'primeng/api';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-chef-signup',
  templateUrl: './chef-signup.component.html',
  styleUrls: ['./chef-signup.component.css']
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
    contactEmail:"",
    contactPhone:"",
    misc:""
  };

  constructor() { }

  ngOnInit() {
  }
}













