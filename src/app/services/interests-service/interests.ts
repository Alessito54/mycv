import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  constructor(private firestore: Firestore) { }

  getInterests(): Observable<any[]> {
    const q = query(collection(this.firestore, 'interests'));
    return collectionData(q);
  }
}
