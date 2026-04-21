import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private firestore: Firestore) { }

  getSkills(): Observable<any[]> {
    const q = query(collection(this.firestore, 'skills'));
    return collectionData(q);
  }
}
