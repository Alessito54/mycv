import { Injectable } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private firestore: Firestore) { }

  getHeader(): Observable<any> {
    const headerRef = doc(this.firestore, 'header/info');
    return docData(headerRef);
  }
}
