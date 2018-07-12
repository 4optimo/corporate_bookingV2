import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptClientPopupComponent } from './opt-client-popup.component';

describe('OptClientPopupComponent', () => {
  let component: OptClientPopupComponent;
  let fixture: ComponentFixture<OptClientPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptClientPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptClientPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
