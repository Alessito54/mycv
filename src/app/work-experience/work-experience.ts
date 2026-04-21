import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work-experience',
  standalone: false,
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.css']
})
export class WorkExperience implements OnInit {
  workExperience$!: Observable<any[]>;

  constructor(public workExperienceService: WorkExperienceService) { }

  ngOnInit() {
    this.workExperience$ = this.workExperienceService.getWorkExperience();
  }
}
