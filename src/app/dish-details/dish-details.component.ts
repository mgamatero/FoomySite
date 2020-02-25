import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: "app-dish-details",
  templateUrl: "./dish-details.component.html",
  styleUrls: ["./dish-details.component.css"]
})
export class DishDetailsComponent implements OnInit {
  dish_id;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.dish_id = params.get("id");
    });
  }
}
