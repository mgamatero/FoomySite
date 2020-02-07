import { Component, OnInit } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import {SelectItem} from 'primeng/api';
import { JsonPipe } from '@angular/common';

@Component({
  selector: "app-add-dish",
  templateUrl: "./add-dish-form.component.html",
  styleUrls: ["./add-dish-form.component.css"]
})



export class AddDishFormComponent implements OnInit {

  categories: any[];
  selectedCategory: {name:'',value:''};



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
   this.categories = [
     {name:'Appetizer',value:'Appetizer'},
     {name:'Entree',value:'Entree'},
     {name:'Side dish',value:'Side dish'},
     {name:'Dessert',value:'Dessert'}
    ]
  }

  ngOnInit() {

  }

  onPreviewClick()
  {
    console.log('Hello')
    localStorage.setItem('addDishFormValue',JSON.stringify(this.dish_form_value))
  }
}

