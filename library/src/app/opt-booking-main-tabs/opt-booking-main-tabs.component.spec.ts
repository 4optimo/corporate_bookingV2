import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingMainTabsComponent } from './opt-booking-main-tabs.component';

describe('OptBookingMainTabsComponent', () => {
  let component: OptBookingMainTabsComponent;
  let fixture: ComponentFixture<OptBookingMainTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingMainTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingMainTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
