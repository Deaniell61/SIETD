import { TestBed, inject } from '@angular/core/testing';

import { DetalleGranoBasicoService } from './detalle-grano-basico.service';

describe('DetalleGranoBasicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleGranoBasicoService]
    });
  });

  it('should be created', inject([DetalleGranoBasicoService], (service: DetalleGranoBasicoService) => {
    expect(service).toBeTruthy();
  }));
});
