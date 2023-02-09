import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAreaComponent } from './nav-area.component';

describe('NavAreaComponent', () => {
  let component: NavAreaComponent;
  let fixture: ComponentFixture<NavAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
