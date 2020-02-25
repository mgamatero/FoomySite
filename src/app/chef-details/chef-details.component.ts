import { Component, OnInit } from "@angular/core";
import { ChefService } from "../services/chef.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-chef-details",
  templateUrl: "./chef-details.component.html",
  styleUrls: ["./chef-details.component.css"]
})
export class ChefDetailsComponent implements OnInit {
  chefDetails: any;
  chef_id;

  tempChefInfo = {
    image:
      "https://cdn.vox-cdn.com/thumbor/wwYnkFN9L0OGT6gf5pUOfjcmy_s=/0x0:2000x1498/1200x800/filters:focal(877x266:1197x586)/cdn.vox-cdn.com/uploads/chorus_image/image/58429809/david_chang.0.jpg",
    name: "Chef Chang",
    city: "Irvine",
    state: "CA",
    availableDays: ["M", "W", "F"],
    availableTimes: ["Lunch, Noon"],
    contactEmail: "chang@chang.com",
    contactPhone: "776-998-7867",
    misc: "Hello let's fry some stuff!",
    category: "Entree, Side Dishes",
    cuisine: "Chinese American Fusion"
  };

  constructor(
    private chefService: ChefService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //This is the id from params
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.chef_id = params.get("id");
    });

    // NOT WORKING =========== ????????????????????
    this.chefService
      .getSingleChef("zYcSGjRm0MXrXD5nFfMLAPOI9Xe2")
      .subscribe(data => {
        console.log("Chef details => ", data);
        this.chefDetails = data;
      });
    // ===============
  }

  onClickDishDetails(dishID){
    this.router.navigate(['/dish-details',dishID])
  }

}
