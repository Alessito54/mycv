import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private firestore: Firestore) { }

  getEducation(): Observable<any[]> {
    const q = query(collection(this.firestore, 'education'));
    return collectionData(q);
  }
}
