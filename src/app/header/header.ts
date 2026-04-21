import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header-service/header';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  headerInfo$!: Observable<any>;
  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerInfo$ = this.headerService.getHeader();
  }
}
