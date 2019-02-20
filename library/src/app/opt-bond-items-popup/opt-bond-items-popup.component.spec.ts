import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptBondItemsPopupComponent } from './opt-bond-items-popup.component';

describe('OptBondItemsPopupComponent', () => {
  let component: OptBondItemsPopupComponent;
  let fixture: ComponentFixture<OptBondItemsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptBondItemsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptBondItemsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
