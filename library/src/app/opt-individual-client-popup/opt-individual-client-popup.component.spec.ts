import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptIndividualClientPopupComponent } from './opt-individual-client-popup.component';

describe('OptIndividualClientPopupComponent', () => {
  let component: OptIndividualClientPopupComponent;
  let fixture: ComponentFixture<OptIndividualClientPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptIndividualClientPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptIndividualClientPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
