import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';
import { SkillsService } from '../services/skills-service/skills';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Skills],
      providers: [SkillsService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
