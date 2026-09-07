import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates';
import { Observable } from 'rxjs';
import { Certificate } from '../models/cv.models';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css']
})
export class Certificates implements OnInit {
  certificates$!: Observable<Certificate[]>;
  constructor(public certificatesService: CertificatesService) { }
  ngOnInit() {
    this.certificates$ = this.certificatesService.getCertificates();
  }
}
