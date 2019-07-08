import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptSliderComponent } from './opt-slider.component';

describe('OptSliderComponent', () => {
  let component: OptSliderComponent;
  let fixture: ComponentFixture<OptSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
