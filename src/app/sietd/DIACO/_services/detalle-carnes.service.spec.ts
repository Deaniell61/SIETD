import { TestBed, inject } from '@angular/core/testing';

import { DetalleCarnesService } from './detalle-carnes.service';

describe('DetalleCarnesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleCarnesService]
    });
  });

  it('should be created', inject([DetalleCarnesService], (service: DetalleCarnesService) => {
    expect(service).toBeTruthy();
  }));
});
