import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptClientSummaryComponent } from './opt-client-summary.component';

describe('OptClientSummaryComponent', () => {
  let component: OptClientSummaryComponent;
  let fixture: ComponentFixture<OptClientSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptClientSummaryComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptClientSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
