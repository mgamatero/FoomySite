import { Component, OnInit } from '@angular/core';
// import {InputTextModule} from 'primeng/inputtext';
// import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
test:string;

  constructor() { }

  ngOnInit() {
  }

}
