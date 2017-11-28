import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGasPropanoComponent } from './detalle-gas-propano.component';

describe('DetalleGasPropanoComponent', () => {
  let component: DetalleGasPropanoComponent;
  let fixture: ComponentFixture<DetalleGasPropanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGasPropanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGasPropanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
