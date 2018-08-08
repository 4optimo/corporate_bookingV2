import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptTicketScanPopupComponent } from './opt-ticket-scan-popup.component';

describe('OptTicketScanPopupComponent', () => {
  let component: OptTicketScanPopupComponent;
  let fixture: ComponentFixture<OptTicketScanPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptTicketScanPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptTicketScanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
