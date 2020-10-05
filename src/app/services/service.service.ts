import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../user';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  users: Observable<User[]>;

  constructor(public afs: AngularFirestore) {
    // this.users = this.afs.collection('Users').valueChanges();
  }
  getUsers(){
    this.users = this.afs.collection('Users').snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as User;
            data.id = a.payload.doc.id;
            return data;
          });
      }));
    return this.users;
  }

}
