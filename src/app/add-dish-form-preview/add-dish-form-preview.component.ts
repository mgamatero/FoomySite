import { Component, OnInit } from '@angular/core';
import {HrComponent} from '../hr/hr.component';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-add-dish-form-preview',
  templateUrl: './add-dish-form-preview.component.html',
  styleUrls: ['./add-dish-form-preview.component.css']
})
export class AddDishFormPreviewComponent implements OnInit {
formPreviewLocalStorage = {
  image: "",
  name: "",
  ingredients: "",
  category: "",
  cuisine: "",
  allergens: "",
  description: ""
}
  constructor() { }

  ngOnInit() {
    this.formPreviewLocalStorage = JSON.parse(localStorage.getItem('addDishFormValue'))
    console.log('From local ', this.formPreviewLocalStorage.name)
  }

}
