import { Component, OnInit } from '@angular/core';
import { FoomiesService} from '../services/foomies.service';
import { FoommyInfo } from "../models/foommyinfo";

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  newFoommy: FoommyInfo = {
  title:'',
  address:'',
  image:'',
  specialties:''
  }

  constructor(private foommyService: FoomiesService) { }

  ngOnInit() {
  }

  addDB(){

    this.foommyService.addFoommies(this.newFoommy);
    this.newFoommy.title='',
    this.newFoommy.address='',
    this.newFoommy.image='',
    this.newFoommy.specialties=''

  }

}
