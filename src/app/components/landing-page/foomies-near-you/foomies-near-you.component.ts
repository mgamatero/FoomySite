import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-foomies-near-you',
  templateUrl: './foomies-near-you.component.html',
  styleUrls: ['./foomies-near-you.component.css']
})
export class FoomiesNearYouComponent implements OnInit {

foommies = [
  {
    title : `Mike's Desserts`,
    address: '2205 Lace Leaf Lane, Tustin CA 92782',
    specialties: 'Kutsina',
    image:'http://www.maggwire.com/wp-content/uploads/2016/07/kutsinta-recipe.jpg'
  },
  {
    title : `Sunnie's Special`,
    address: 'Diamond Bar',
    specialties: 'Fried Rice',
    image:'https://i.ytimg.com/vi/8FJEjT2-uQw/maxresdefault.jpg'
  },
  {
    title : `Jeannies Kitchen`,
    address: 'Anaheim Hills, CA 92782',
    specialties: 'Yum yum on a plate',
    image:'http://2.bp.blogspot.com/-WEd5gnOToU0/Vfevh2gi8dI/AAAAAAAAVLg/A77r11X4ihI/s1600/Nostalgia%2BIndonesian%2B%252836%2Bof%2B34%2529.jpg'
  },

]


  constructor() { }

  ngOnInit() {
  }

}
