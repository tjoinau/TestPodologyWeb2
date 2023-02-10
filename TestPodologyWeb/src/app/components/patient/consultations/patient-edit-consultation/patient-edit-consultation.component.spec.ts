import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditConsultationComponent } from './patient-edit-consultation.component';

describe('PatientEditConsultationComponent', () => {
  let component: PatientEditConsultationComponent;
  let fixture: ComponentFixture<PatientEditConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEditConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
