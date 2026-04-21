import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Certificates } from './certificates';
import { CertificatesService } from '../services/certificates-service/certificates';

describe('Certificates', () => {
  let component: Certificates;
  let fixture: ComponentFixture<Certificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Certificates],
      providers: [CertificatesService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Certificates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
