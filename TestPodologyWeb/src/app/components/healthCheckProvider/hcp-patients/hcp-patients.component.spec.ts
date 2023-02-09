import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpPatientsComponent } from './hcp-patients.component';

describe('HcpPatientsComponent', () => {
  let component: HcpPatientsComponent;
  let fixture: ComponentFixture<HcpPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcpPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcpPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
