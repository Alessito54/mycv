import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Certificate } from '../../models/cv.models';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private firestore: Firestore) { }

  getCertificates(): Observable<Certificate[]> {
    const q = query(collection(this.firestore, 'certificates'));
    return collectionData(q) as Observable<Certificate[]>;
  }
}
