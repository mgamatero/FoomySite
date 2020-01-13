import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

signUpForm:FormGroup; //Reactive forms

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
        phone: new FormControl('',[Validators.required,Validators.pattern(`/^\d{10,12}$`)]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

}
