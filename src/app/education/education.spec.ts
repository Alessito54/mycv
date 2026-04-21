import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Education } from './education';
import { EducationService } from '../services/education-service/education';

describe('Education', () => {
  let component: Education;
  let fixture: ComponentFixture<Education>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Education],
      providers: [EducationService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Education);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
