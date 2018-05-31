import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPopupModalComponent } from './opt-popup-modal.component';

describe('OptPopupModalComponent', () => {
  let component: OptPopupModalComponent;
  let fixture: ComponentFixture<OptPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
