import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { ChefInfoModel } from "../models/chef";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
    // this.chefInfo = this.afs
    //   .collection<ChefInfoModel>("person")
    //   .valueChanges();
    this.chefInfo = this.afs
      .collection<ChefInfoModel>("person")
      .snapshotChanges().pipe(map(changes=>{
        return changes.map(a=>{
          const data = a.payload.doc.data()
          data.id=a.payload.doc.id;
          return data;
        })
      }));
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
      this.afs
    .collection("person")
    .doc(this.afAuth.currentUserInfo.uid)
      console.log("chef created! ", x)
      console.log("UID IS ", this.afAuth.currentUserInfo.uid)
    });
  }



  isCurrentUserAChef():Observable<boolean>{
       // STUB - Issues with afAuth.currentUserInfo.uid,  I cannot seem to access this value anymore???
      // console.log( this.afs.collection("person").doc(this.afAuth.currentUserInfo.uid))
    return of(false)
  }

  getChefId(x:ChefInfoModel){
    return this.afs.doc(`person/${x.id}`)
  }


}
