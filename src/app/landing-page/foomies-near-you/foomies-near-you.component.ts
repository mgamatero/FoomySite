import { Component, OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { FoomiesService } from "../../services/foomies.service";
import { FoommyInfo } from "../../models/foommyinfo";
import { SandboxComponent } from "../../sandbox/sandbox.component";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-foomies-near-you",
  templateUrl: "./foomies-near-you.component.html",
  styleUrls: ["./foomies-near-you.component.css"]
})
export class FoomiesNearYouComponent implements OnInit {
  foommyFromDB: any;
  foommyinfo: FoommyInfo;

  hardCodedFoommy = [
    {
      chef_image:
        "http://www.vancouversun.com/life/cms/binary/6368589.jpg?size=640x420",
      chef_name: "Marvin's Kitchen",
      chef_city: "Tustin",
      chef_state: "CA",
      chef_description:
        "Bringing my childhood favorites to your world.  I specialize mostly in Taiwanese cuisine, with a few suprises here and there.  Come see for yourself!"
    },
    {
      chef_image:
        "http://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2010/5/21/1/generic_italian-pantry_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1357774373206.jpeg",
      chef_name: "Tavolo Per Piatto",
      chef_city: "Fullerton",
      chef_state: "CA",
      chef_description:
        "Fresh Italian food as cooked by my Grandma. As Italian as you can get."
    }
  ];

  constructor(
    private foommyService: FoomiesService,
    public afAuth: AuthService
  ) {}

  ngOnInit() {
    //ONLY USE FIREBASE IF LOGGED IN
    this.foommyService.getFoommies().subscribe(foommy => {
      this.foommyFromDB = foommy;
    });
  }
}
