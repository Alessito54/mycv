import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  constructor(private firestore: Firestore) { }

  getWorkExperience(): Observable<any[]> {
    const q = query(collection(this.firestore, 'work-experience'));
    return collectionData(q);
  }
}
