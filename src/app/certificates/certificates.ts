import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css']
})
export class Certificates implements OnInit {
  certificates$!: Observable<any[]>;
  constructor(public certificatesService: CertificatesService) { }
  ngOnInit() {
    this.certificates$ = this.certificatesService.getCertificates();
  }
}
