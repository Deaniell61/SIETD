import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGranosBasicosComponent } from './detalle-granos-basicos.component';

describe('DetalleGranosBasicosComponent', () => {
  let component: DetalleGranosBasicosComponent;
  let fixture: ComponentFixture<DetalleGranosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGranosBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGranosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
