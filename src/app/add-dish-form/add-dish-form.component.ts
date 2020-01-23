import { Component, OnInit } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish-form.component.html',
  styleUrls: ['./add-dish-form.component.css']
})
export class AddDishFormComponent implements OnInit {

  // dish_cuisine: string[] = ['American', 'Asian','Chinese','Japanese','Italian','Fusion','Other'];
  dish_cuisine: string[];


  dish_form_value = {
    dish_name:'',
    dish_image:'',
    dish_category:'',
    dish_cuisine:[],
    dish_ingredients:'',
    dish_allergen: ''
  };

  constructor() { }

  ngOnInit() {

  }
}
