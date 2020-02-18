import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { ChefInfoModel } from "../models/chef";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ChefService {
  chefCollection: AngularFirestoreCollection<ChefInfoModel>;
  chefInfo: Observable<ChefInfoModel[]>;

  constructor(public afs: AngularFirestore, private afAuth: AuthService) {
    this.chefInfo = this.afs
      .collection<ChefInfoModel>("person")
      .valueChanges();
  }

  getChef() {
    return this.chefInfo;
  }


  createChef(x: any) {
    return this.afs
    .collection("person")
    .doc(this.afAuth.currentUserInfo.uid)
    .set(x)
    .then(() => {
      console.log("chef created! ", x)
      console.log("UID IS ", this.afAuth.currentUserInfo.uid)
    });
  }
}

