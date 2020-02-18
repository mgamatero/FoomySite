import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { FoommyInfo } from "../models/foommyinfo";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { parse } from "querystring";

@Injectable({
  providedIn: "root"
})
export class FoomiesService {
  // isChef: Observable<boolean>;
  foomyCollection: AngularFirestoreCollection<FoommyInfo>;
  foommyInfo: Observable<FoommyInfo[]>;

  constructor(public afs: AngularFirestore, private afAuth: AuthService) {
    this.foommyInfo = this.afs
      .collection<FoommyInfo>("foommies")
      .valueChanges();
  }

  getFoommies() {
    return this.foommyInfo;
  }

  addFoommies(x: FoommyInfo) {
    const foommyCollection = this.afs.collection<FoommyInfo>("foommies");
    foommyCollection.add(x);
  }

  // ------------------------------CHEF---------------------------------------

  createChef(x: any) {
    return this.afs
      .collection("person")
      .doc(this.afAuth.currentUserInfo.uid)
      .set(x)
      .then(() => {
        console.log("chef created! ", x);
      });
  }
}
