import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Interests } from './interests';
import { InterestsService } from '../services/interests-service/interests';

describe('Interests', () => {
  let component: Interests;
  let fixture: ComponentFixture<Interests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Interests],
      providers: [InterestsService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Interests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
