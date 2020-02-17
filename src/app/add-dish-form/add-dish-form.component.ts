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
import { FormBuilder, FormGroup, Validator } from '@angular/forms';


@Component({
  selector: "app-add-dish",
  templateUrl: "./add-dish-form.component.html",
  styleUrls: ["./add-dish-form.component.css"]
})



export class AddDishFormComponent implements OnInit {

  addDishForm:FormGroup;


  // dish_form_value = {
  //   createdBy: this.afAuth.currentUserInfo.uid,
  //   image: "",
  //   name: "",
  //   ingredients: "",
  //   category: "",
  //   cuisine: "",
  //   allergens: "",
  //   description: ""
  // };

  constructor(private dishService:DishService,
    private afAuth:AuthService,
    private fb: FormBuilder
    ) {
  }

  ngOnInit() {
    this.addDishForm = this.fb.group({
      createdBy:[this.afAuth.currentUserInfo.uid],
      image: [""],
      name: [""],
      ingredients: [""],
      category: [""],
      cuisine: [""],
      allergens: [""],
      description: [""]
    })
  }

  onClickDishCreate(){
    this.dishService.addDish(this.addDishForm.value)
  }
}


