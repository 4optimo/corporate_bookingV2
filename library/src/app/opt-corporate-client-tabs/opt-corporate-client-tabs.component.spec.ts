import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptCorporateClientTabsComponent } from './opt-corporate-client-tabs.component';

describe('OptCorporateClientTabsComponent', () => {
  let component: OptCorporateClientTabsComponent;
  let fixture: ComponentFixture<OptCorporateClientTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptCorporateClientTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptCorporateClientTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
