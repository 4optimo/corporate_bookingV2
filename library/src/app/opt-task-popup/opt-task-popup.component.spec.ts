import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptTaskPopupComponent } from './opt-task-popup.component';

describe('OptTaskPopupComponent', () => {
  let component: OptTaskPopupComponent;
  let fixture: ComponentFixture<OptTaskPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptTaskPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptTaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
