import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPopupQuestionnaireComponent } from './opt-popup-questionnaire.component';

describe('OptPopupQuestionnaireComponent', () => {
  let component: OptPopupQuestionnaireComponent;
  let fixture: ComponentFixture<OptPopupQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPopupQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPopupQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
