import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { FoommyInfo } from '../models/foommyinfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoomiesService {

foomyCollection: AngularFirestoreCollection<FoommyInfo>;
foommyInfo: Observable<FoommyInfo[]>;

  constructor(public afs: AngularFirestore) {
this.foommyInfo = this.afs.collection<FoommyInfo>('foommies').valueChanges();
  }


getFoommies(){
  return this.foommyInfo;
}

addFoommies(x:FoommyInfo){
 const foommyCollection = this.afs.collection<FoommyInfo>('foommies');
 foommyCollection.add(x);
}


}


