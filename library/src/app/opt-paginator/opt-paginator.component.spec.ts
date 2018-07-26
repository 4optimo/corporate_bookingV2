import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptPaginatorComponent } from './opt-paginator.component';

describe('OptPaginatorComponent', () => {
  let component: OptPaginatorComponent;
  let fixture: ComponentFixture<OptPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
