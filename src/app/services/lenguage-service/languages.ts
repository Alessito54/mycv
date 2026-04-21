import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  constructor(private firestore: Firestore) { }

  getLanguages(): Observable<any[]> {
    const q = query(collection(this.firestore, 'languages'));
    return collectionData(q);
  }
}
