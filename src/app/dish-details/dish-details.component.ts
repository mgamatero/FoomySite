import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-dish-details",
  templateUrl: "./dish-details.component.html",
  styleUrls: ["./dish-details.component.css"]
})
export class DishDetailsComponent implements OnInit {
  dish_id;
  temp_dish = {
    allergens: "Salt, Pepper, Oil, Liver in sauce",
    category: "Entree",
    createdBy: "q0guDrUISURFhUhJk5k1oQg4OvX2",
    cuisine: "Asian - Filipino",
    description: "This is a dish from my childhood.  Brings back good memories.  Young pig roasted to perfection, with secret spices from previous generations.  Comes with my homemade liver sauce.  Please order this dish in advance since this takes 1 day to prepare",
    image:
      "https://sa.kapamilya.com/absnews/abscbnnews/media/2018/life/06/25/ricos-lechon-062518.jpg?ext=.jpg",
    ingredients: "Piggy, spices",
    name: "Lechon Cebu",
    chef_image: "https://cdn.vox-cdn.com/thumbor/wwYnkFN9L0OGT6gf5pUOfjcmy_s=/0x0:2000x1498/1200x800/filters:focal(877x266:1197x586)/cdn.vox-cdn.com/uploads/chorus_image/image/58429809/david_chang.0.jpg",
    chef_name:"Chef Chang"
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dish_id = params.get("id");
    });
  }
}
