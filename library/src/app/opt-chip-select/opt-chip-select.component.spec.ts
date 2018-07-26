import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptChipSelectComponent } from './opt-chip-select.component';

describe('OptChipSelectComponent', () => {
  let component: OptChipSelectComponent;
  let fixture: ComponentFixture<OptChipSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptChipSelectComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptChipSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
