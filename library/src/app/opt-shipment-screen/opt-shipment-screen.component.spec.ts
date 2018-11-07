import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptShipmentScreenComponent } from './opt-shipment-screen.component';

describe('OptShipmentScreenComponent', () => {
  let component: OptShipmentScreenComponent;
  let fixture: ComponentFixture<OptShipmentScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptShipmentScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptShipmentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
