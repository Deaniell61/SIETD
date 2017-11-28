import { TestBed, inject } from '@angular/core/testing';

import { TipoServicioCombustibleService } from './tipo-servicio-combustible.service';

describe('TipoServicioCombustibleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoServicioCombustibleService]
    });
  });

  it('should be created', inject([TipoServicioCombustibleService], (service: TipoServicioCombustibleService) => {
    expect(service).toBeTruthy();
  }));
});
