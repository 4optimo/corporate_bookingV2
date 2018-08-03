import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCollectionDispatchPopupComponent } from './opt-collection-dispatch-popup.component';

describe('OptCollectionDispatchPopupComponent', () => {
  let component: OptCollectionDispatchPopupComponent;
  let fixture: ComponentFixture<OptCollectionDispatchPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptCollectionDispatchPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptCollectionDispatchPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
