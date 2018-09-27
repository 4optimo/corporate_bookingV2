import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptToastMessageComponent } from './opt-toast-message.component';

describe('OptToastMessageComponent', () => {
  let component: OptToastMessageComponent;
  let fixture: ComponentFixture<OptToastMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptToastMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptToastMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
