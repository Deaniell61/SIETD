import { TestBed, inject } from '@angular/core/testing';

import { DetalleInfraestructuraService } from './detalle-infraestructura.service';

describe('DetalleInfraestructuraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleInfraestructuraService]
    });
  });

  it('should be created', inject([DetalleInfraestructuraService], (service: DetalleInfraestructuraService) => {
    expect(service).toBeTruthy();
  }));
});
