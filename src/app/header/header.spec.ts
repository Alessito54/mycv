import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { HeaderService } from '../services/header-service/header';
import { AngularFireModule } from '../mock-angular-fire';
import { environment } from '../../environments/environment';

describe('Header Component test', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Header],
      imports: [AngularFireModule.initializeApp(environment.firebase)],
      providers: [HeaderService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
