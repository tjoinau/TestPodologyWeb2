import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpMainComponent } from './hcp-main.component';

describe('HcpMainComponent', () => {
  let component: HcpMainComponent;
  let fixture: ComponentFixture<HcpMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcpMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcpMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
