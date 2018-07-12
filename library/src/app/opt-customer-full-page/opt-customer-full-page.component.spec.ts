import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCustomerFullPageComponent } from './opt-customer-full-page.component';

describe('OptCustomerFullPageComponent', () => {
  let component: OptCustomerFullPageComponent;
  let fixture: ComponentFixture<OptCustomerFullPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptCustomerFullPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptCustomerFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
