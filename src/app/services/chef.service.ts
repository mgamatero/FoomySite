import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { ChefInfoModel } from "../models/chef";
import { Observable } from "rxjs";
import { of } from 'rxjs'
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ChefService {
  chefCollection: AngularFirestoreCollection<ChefInfoModel>;
  chefInfo: Observable<ChefInfoModel[]>;
  chefOrNot: Observable<boolean>;
  user:any

  constructor(public afs: AngularFirestore, private afAuth: AuthService) {
    this.chefInfo = this.afs
      .collection<ChefInfoModel>("person")
      .valueChanges();

// console.log(this.afAuth.currentUserInfo.uid)
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

  isCurrentUserAChef():Observable<boolean>{

       // STUB - Issues with afAuth.currentUserInfo.uid,  I cannot seem to access this value anymore???
      // console.log( this.afs.collection("person").doc(this.afAuth.currentUserInfo.uid))
    return of(false)
  }
}
