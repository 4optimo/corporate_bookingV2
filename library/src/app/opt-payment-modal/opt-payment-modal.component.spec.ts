import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPaymentModalComponent } from './opt-payment-modal.component';

describe('OptPaymentModalComponent', () => {
  let component: OptPaymentModalComponent;
  let fixture: ComponentFixture<OptPaymentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPaymentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
