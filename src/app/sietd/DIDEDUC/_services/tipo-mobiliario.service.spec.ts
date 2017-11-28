import { TestBed, inject } from '@angular/core/testing';

import { TipoMobiliarioService } from './tipo-mobiliario.service';

describe('TipoMobiliarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoMobiliarioService]
    });
  });

  it('should be created', inject([TipoMobiliarioService], (service: TipoMobiliarioService) => {
    expect(service).toBeTruthy();
  }));
});
