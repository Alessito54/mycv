import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/lenguage-service/languages';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-languages',
  standalone: false,
  templateUrl: './languages.html',
  styleUrls: ['./languages.css']
})
export class Languages implements OnInit {
  languages$!: Observable<any[]>;
  constructor(public languagesService: LanguagesService) { }
  ngOnInit() {
    this.languages$ = this.languagesService.getLanguages();
  }
}
