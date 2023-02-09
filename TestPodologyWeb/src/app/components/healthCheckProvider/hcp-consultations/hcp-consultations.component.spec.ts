import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpConsultationsComponent } from './hcp-consultations.component';

describe('HcpConsultationsComponent', () => {
  let component: HcpConsultationsComponent;
  let fixture: ComponentFixture<HcpConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcpConsultationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcpConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
