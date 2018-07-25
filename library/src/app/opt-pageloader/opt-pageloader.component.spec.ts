import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPageloaderComponent } from './opt-pageloader.component';

describe('OptPageloaderComponent', () => {
  let component: OptPageloaderComponent;
  let fixture: ComponentFixture<OptPageloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPageloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPageloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
