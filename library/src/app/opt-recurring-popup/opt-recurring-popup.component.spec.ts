import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptRecurringPopupComponent } from './opt-recurring-popup.component';

describe('OptRecurringPopupComponent', () => {
  let component: OptRecurringPopupComponent;
  let fixture: ComponentFixture<OptRecurringPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptRecurringPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptRecurringPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
