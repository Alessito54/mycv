import { TestBed } from '@angular/core/testing';
import { HeaderService } from './header';
import { AngularFireModule } from '../../mock-angular-fire';
import { environment } from '../../../environments/environment';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get header data', () => {
    expect(service.getHeader()).not.toBeNull();
  });
});
