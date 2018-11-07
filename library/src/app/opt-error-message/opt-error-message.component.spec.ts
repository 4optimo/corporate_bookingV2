import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptErrorMessageComponent } from './opt-error-message.component';

describe('OptErrorMessageComponent', () => {
  let component: OptErrorMessageComponent;
  let fixture: ComponentFixture<OptErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
