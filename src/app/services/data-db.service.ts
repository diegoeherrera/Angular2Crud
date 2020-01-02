import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Iuser} from '../models/user.model';
import {map, timestamp} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataDbService {

private usersCollection: AngularFirestoreCollection<Iuser>;

constructor(private firestore: AngularFirestore) {

    this.usersCollection = firestore.collection<Iuser>('users', ref => ref.orderBy('timestamp', 'desc'));
  }

  addNewUser(newUser:any):void{
    const user = newUser;
    user.timestamp= new Date().valueOf();
    this.usersCollection.add(newUser)
  }

  getUsers(){
    return this.usersCollection.snapshotChanges().pipe(
      map(users => {
      return users.map(a => {
          const user = a.payload.doc.data()
          const id = a.payload.doc.id;
          return { id, ...user };
          });
        })
      );
    }

  removeUser(id){
    return this.usersCollection.doc(id).delete()
  }

  updateUser(updatedUser,id):void{
    this.usersCollection.doc(id).update({
      name:updatedUser.name,
      email:updatedUser.email,
      mobile:updatedUser.mobile,
      age:updatedUser.age
    });

  }

  getUser(id){
    console.log("GET USER", id)
    return this.usersCollection.doc(id).snapshotChanges()
    .pipe(
      map(changes => {

      const data = changes.payload.data();
      const id = changes.payload.id;

      return { id, ...data };
      })
      )

  }

}
