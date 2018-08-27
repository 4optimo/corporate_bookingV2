import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptHostAddPopupComponent } from './opt-host-add-popup.component';

describe('OptHostAddPopupComponent', () => {
  let component: OptHostAddPopupComponent;
  let fixture: ComponentFixture<OptHostAddPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptHostAddPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptHostAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
