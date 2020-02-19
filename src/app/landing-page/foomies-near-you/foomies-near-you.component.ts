import { Component, OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { FoomiesService } from "../../services/foomies.service";
import { FoommyInfo } from "../../models/foommyinfo";
import { ChefService } from "../../services/chef.service";
import { ChefInfoModel } from "../../models/chef";
import { SandboxComponent } from "../../sandbox/sandbox.component";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-foomies-near-you",
  templateUrl: "./foomies-near-you.component.html",
  styleUrls: ["./foomies-near-you.component.css"]
})
export class FoomiesNearYouComponent implements OnInit {
  chefFromDB: ChefInfoModel[];


  hardCodedFoommy = [
    {
      image:
        "http://www.vancouversun.com/life/cms/binary/6368589.jpg?size=640x420",
      name: "Marvin's Kitchen",
      city: "Tustin",
      state: "CA",
      misc:
        "Bringing my childhood favorites to your world.  I specialize mostly in Taiwanese cuisine, with a few suprises here and there.  Come see for yourself!"
    },
    {
      image:
        "http://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2010/5/21/1/generic_italian-pantry_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1357774373206.jpeg",
      name: "Tavolo Per Piatto",
      city: "Fullerton",
      state: "CA",
      misc:
        "Fresh Italian food as cooked by my Grandma. As Italian as you can get."
    }
  ];

  constructor(
    private foommyService: FoomiesService,
    public afAuth: AuthService,
    private chefService: ChefService,

  ) {}

  ngOnInit() {
    //ONLY USE FIREBASE IF LOGGED IN
    this.chefService.getChef().subscribe(chef => {
      console.log(chef)
      this.chefFromDB = chef;
    });
  }

  clickChefDetails(){
    console.log('clickChefDetails!')
  }
}
