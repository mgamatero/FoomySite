import { Component, OnInit } from '@angular/core';
// import { MenuHeaderComponent } from '../menu-header/menu-header.component';
import { HeaderComponent } from '../landing-page/header/header.component';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
