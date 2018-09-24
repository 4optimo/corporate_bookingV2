import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptReprintPopupComponent } from './opt-reprint-popup.component';

describe('OptReprintPopupComponent', () => {
  let component: OptReprintPopupComponent;
  let fixture: ComponentFixture<OptReprintPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptReprintPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptReprintPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
