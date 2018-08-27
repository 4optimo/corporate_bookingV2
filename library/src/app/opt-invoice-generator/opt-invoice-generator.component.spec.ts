import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptInvoiceGeneratorComponent } from './opt-invoice-generator.component';

describe('OptInvoiceGeneratorComponent', () => {
  let component: OptInvoiceGeneratorComponent;
  let fixture: ComponentFixture<OptInvoiceGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptInvoiceGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptInvoiceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
