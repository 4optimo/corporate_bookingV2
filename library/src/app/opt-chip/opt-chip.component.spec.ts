import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptChipComponent } from './opt-chip.component';

describe('OptChipComponent', () => {
  let component: OptChipComponent;
  let fixture: ComponentFixture<OptChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
