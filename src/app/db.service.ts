import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from 'firebase/firestore';
import { publication } from './models/publication';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore:Firestore) {

   }

   addPost(publication:publication){

    let $publicationRef=collection(this.firestore,"publication");
    return addDoc($publicationRef,publication);

   }
}
