import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCorporateClientPopupComponent } from './opt-corporate-client-popup.component';

describe('OptCorporateClientPopupComponent', () => {
  let component: OptCorporateClientPopupComponent;
  let fixture: ComponentFixture<OptCorporateClientPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptCorporateClientPopupComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptCorporateClientPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
