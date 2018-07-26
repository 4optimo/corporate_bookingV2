import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptChipDatePickerComponent } from './opt-chip-date-picker.component';

describe('OptChipDatePickerComponent', () => {
  let component: OptChipDatePickerComponent;
  let fixture: ComponentFixture<OptChipDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptChipDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptChipDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
