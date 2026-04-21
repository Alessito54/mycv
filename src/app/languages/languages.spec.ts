import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Languages } from './languages';
import { LanguagesService } from '../services/lenguage-service/languages';

describe('Languages', () => {
  let component: Languages;
  let fixture: ComponentFixture<Languages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Languages],
      providers: [LanguagesService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Languages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
