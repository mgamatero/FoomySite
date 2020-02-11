import { Component, OnInit } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectItem} from 'primeng/api';
import { JsonPipe } from '@angular/common';
import { DishService } from '../services/dish.service';
import { AuthService } from '../services/auth.service';
import { DishesModel} from '../models/dishmodel';


@Component({
  selector: "app-add-dish",
  templateUrl: "./add-dish-form.component.html",
  styleUrls: ["./add-dish-form.component.css"]
})



export class AddDishFormComponent implements OnInit {

  dish_form_value = {
    createdBy: this.afAuth.currentUserInfo.uid,
    image: "",
    name: "",
    ingredients: "",
    category: "",
    cuisine: "",
    allergens: "",
    description: ""
  };

  constructor(private dishService:DishService,private afAuth:AuthService) {
  }

  ngOnInit() {
  }

  onClickDishCreate(){
    this.dishService.addDish(this.dish_form_value)
  }
}

// export interface DishesModel{
//   createdBy:'string',
//   dishPhotoURL:'string',
//   dishName:'string',
//   category:'string',
//   cuisineType:'string',
//   ingredients:'string',
//   allergens:'string',
//   description:'string'
//   }
