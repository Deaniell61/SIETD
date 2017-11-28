import { TestBed, inject } from '@angular/core/testing';

import { DetallecentrosanatorioService } from './detallecentrosanatorio.service';

describe('DetallecentrosanatorioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetallecentrosanatorioService]
    });
  });

  it('should be created', inject([DetallecentrosanatorioService], (service: DetallecentrosanatorioService) => {
    expect(service).toBeTruthy();
  }));
});
