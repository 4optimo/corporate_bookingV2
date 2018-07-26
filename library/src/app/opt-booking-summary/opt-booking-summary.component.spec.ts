import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBookingSummaryComponent } from './opt-booking-summary.component';

describe('OptBookingSummaryComponent', () => {
  let component: OptBookingSummaryComponent;
  let fixture: ComponentFixture<OptBookingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBookingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
