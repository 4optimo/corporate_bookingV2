import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptChipInputComponent } from './opt-chip-input.component';

describe('OptChipInputComponent', () => {
  let component: OptChipInputComponent;
  let fixture: ComponentFixture<OptChipInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptChipInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptChipInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
