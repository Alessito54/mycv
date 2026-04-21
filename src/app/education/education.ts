import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education-service/education';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class Education implements OnInit {
  education$!: Observable<any[]>;
  constructor(public educationService: EducationService) { }
  ngOnInit() {
    this.education$ = this.educationService.getEducation();
  }
}
