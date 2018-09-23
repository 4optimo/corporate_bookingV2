import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptLoadingScreenComponent } from './opt-loading--screen.component';

describe('OptLoadingScreenComponent', () => {
  let component: OptLoadingScreenComponent;
  let fixture: ComponentFixture<OptLoadingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptLoadingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptLoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
