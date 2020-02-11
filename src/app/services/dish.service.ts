import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
import { LoginComponent } from "../login/login.component";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { DishesModel } from "../models/dishmodel";
import { AuthService } from "./auth.service";



@Injectable({
  providedIn: "root"
})
export class DishService {
//  dishToAdd:DishesModel;

  constructor(public afs: AngularFirestore, private afAuth: AuthService) {

  }

  addDish(x){
    return this.afs
      .collection("dishes")
      .doc(this.afAuth.currentUserInfo.uid)
      .set({ x })
      .then(() => {
        console.log("dish created! ", x);
      })
      .catch(err=>{
        console.log('Dish not created', err.message)
      });
  }








}
