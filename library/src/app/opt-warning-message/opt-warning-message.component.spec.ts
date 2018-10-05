import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptWarningMessageComponent } from './opt-warning-message.component';

describe('OptWarningMessageComponent', () => {
  let component: OptWarningMessageComponent;
  let fixture: ComponentFixture<OptWarningMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptWarningMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptWarningMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
