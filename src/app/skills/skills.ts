import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit {
  skills$!: Observable<any[]>;
  constructor(public skillsService: SkillsService) { }
  ngOnInit() {
    this.skills$ = this.skillsService.getSkills();
  }
}
