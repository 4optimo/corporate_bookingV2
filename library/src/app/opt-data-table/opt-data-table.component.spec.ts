import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptDataTableComponent } from './opt-data-table.component';

describe('OptDataTableComponent', () => {
  let component: OptDataTableComponent;
  let fixture: ComponentFixture<OptDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
