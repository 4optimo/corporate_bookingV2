import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptAlertComponent } from './opt-alert.component';

describe('OptAlertComponent', () => {
  let component: OptAlertComponent;
  let fixture: ComponentFixture<OptAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
