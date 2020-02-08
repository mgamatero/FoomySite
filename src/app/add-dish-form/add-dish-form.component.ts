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
  selector: "app-add-dish",
  templateUrl: "./add-dish-form.component.html",
  styleUrls: ["./add-dish-form.component.css"]
})



export class AddDishFormComponent implements OnInit {

selected_category:string;



  dish_form_value = {
    image: "",
    name: "",
    ingredients: "",
    category: "",
    cuisine: "",
    allergens: "",
    description: ""
  };

  constructor() {

  }

  ngOnInit() {

  }

  onPreviewClick()
  {
    console.log('Hello')
    localStorage.setItem('addDishFormValue',JSON.stringify(this.dish_form_value))
  }
}

