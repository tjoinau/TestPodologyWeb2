import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpDashboardComponent } from './hcp-dashboard.component';

describe('HcpDashboardComponent', () => {
  let component: HcpDashboardComponent;
  let fixture: ComponentFixture<HcpDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcpDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcpDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
