import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpCalendarComponent } from './hcp-calendar.component';

describe('HcpCalendarComponent', () => {
  let component: HcpCalendarComponent;
  let fixture: ComponentFixture<HcpCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcpCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcpCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
