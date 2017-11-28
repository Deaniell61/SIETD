import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesInfraestructurasComponent } from './detalles-infraestructuras.component';

describe('DetallesInfraestructurasComponent', () => {
  let component: DetallesInfraestructurasComponent;
  let fixture: ComponentFixture<DetallesInfraestructurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesInfraestructurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesInfraestructurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
