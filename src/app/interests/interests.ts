import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interests',
  standalone: false,
  templateUrl: './interests.html',
  styleUrls: ['./interests.css']
})
export class Interests implements OnInit {
  interests$!: Observable<any[]>;
  constructor(public interestsService: InterestsService) { }
  ngOnInit() {
    this.interests$ = this.interestsService.getInterests();
  }
}
