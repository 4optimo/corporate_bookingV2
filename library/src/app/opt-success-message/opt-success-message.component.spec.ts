import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptSuccessMessageComponent } from './opt-success-message.component';

describe('OptSuccessMessageComponent', () => {
  let component: OptSuccessMessageComponent;
  let fixture: ComponentFixture<OptSuccessMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptSuccessMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
