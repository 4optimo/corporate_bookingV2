import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptFabComponent } from './opt-fab.component';

describe('OptFabComponent', () => {
  let component: OptFabComponent;
  let fixture: ComponentFixture<OptFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
