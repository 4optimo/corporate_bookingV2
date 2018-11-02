import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCounterComponent } from './opt-counter.component';

describe('OptCounterComponent', () => {
  let component: OptCounterComponent;
  let fixture: ComponentFixture<OptCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
