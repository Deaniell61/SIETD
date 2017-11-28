import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCarnesComponent } from './detalle-carnes.component';

describe('DetalleCarnesComponent', () => {
  let component: DetalleCarnesComponent;
  let fixture: ComponentFixture<DetalleCarnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCarnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCarnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
