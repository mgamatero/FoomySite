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

  constructor(
    private foommyService: FoomiesService,
    public afAuth: AuthService
  ) {}

  ngOnInit() {
    // const x: FoommyInfo = {
    //   title: "BaoBaoBao",
    //   address: "33442 Baoland, Bao CA 99080",
    //   image:
    //     "https://tse2.mm.bing.net/th?id=OIP.QZNoUBMEJv51qOi02cczoAHaE7&pid=Api&P=0&w=265&h=178",
    //   specialties: "Bao"
    // };
    // this.foommyService.addFoommies(x);

    this.foommyService.getFoommies().subscribe(foommy => {
      // console.log(foommy)
      this.foommyFromDB = foommy;
    });
  }
}
