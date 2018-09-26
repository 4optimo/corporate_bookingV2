import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptQuestionnairePopupComponent } from './opt-questionnaire-popup.component';

describe('OptQuestionnairePopupComponent', () => {
  let component: OptQuestionnairePopupComponent;
  let fixture: ComponentFixture<OptQuestionnairePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptQuestionnairePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptQuestionnairePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
