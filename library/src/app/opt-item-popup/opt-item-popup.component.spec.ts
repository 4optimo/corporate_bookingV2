import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptItemPopupComponent } from './opt-item-popup.component';

describe('OptItemPopupComponent', () => {
  let component: OptItemPopupComponent;
  let fixture: ComponentFixture<OptItemPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptItemPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
