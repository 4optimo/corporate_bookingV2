import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPopupWindowComponent } from './opt-popup-window.component';

describe('OptPopupWindowComponent', () => {
  let component: OptPopupWindowComponent;
  let fixture: ComponentFixture<OptPopupWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPopupWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPopupWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
