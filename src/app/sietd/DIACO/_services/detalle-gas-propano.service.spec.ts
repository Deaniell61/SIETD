import { TestBed, inject } from '@angular/core/testing';

import { DetalleGasPropanoService } from './detalle-gas-propano.service';

describe('DetalleGasPropanoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleGasPropanoService]
    });
  });

  it('should be created', inject([DetalleGasPropanoService], (service: DetalleGasPropanoService) => {
    expect(service).toBeTruthy();
  }));
});
