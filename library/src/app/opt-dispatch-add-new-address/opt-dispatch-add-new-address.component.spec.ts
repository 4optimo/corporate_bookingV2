import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDispatchAddNewAddressComponent } from './opt-dispatch-add-new-address.component';

describe('OptDispatchAddNewAddressComponent', () => {
  let component: OptDispatchAddNewAddressComponent;
  let fixture: ComponentFixture<OptDispatchAddNewAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptDispatchAddNewAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDispatchAddNewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
