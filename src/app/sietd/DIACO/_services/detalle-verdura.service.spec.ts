import { TestBed, inject } from '@angular/core/testing';

import { DetalleVerduraService } from './detalle-verdura.service';

describe('DetalleVerduraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleVerduraService]
    });
  });

  it('should be created', inject([DetalleVerduraService], (service: DetalleVerduraService) => {
    expect(service).toBeTruthy();
  }));
});
