import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptInvoiceGeneratorRoComponent } from './opt-invoice-generator-ro.component';

describe('OptInvoiceGeneratorRoComponent', () => {
  let component: OptInvoiceGeneratorRoComponent;
  let fixture: ComponentFixture<OptInvoiceGeneratorRoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptInvoiceGeneratorRoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptInvoiceGeneratorRoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
