import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperience } from './work-experience';
import { WorkExperienceService } from '../services/work-experience-service/work-experience';

describe('WorkExperience', () => {
  let component: WorkExperience;
  let fixture: ComponentFixture<WorkExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperience],
      providers: [WorkExperienceService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WorkExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
