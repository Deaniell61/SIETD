import { TestBed, inject } from '@angular/core/testing';

import { TipoAulaService } from './tipo-aula.service';

describe('TipoAulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoAulaService]
    });
  });

  it('should be created', inject([TipoAulaService], (service: TipoAulaService) => {
    expect(service).toBeTruthy();
  }));
});
