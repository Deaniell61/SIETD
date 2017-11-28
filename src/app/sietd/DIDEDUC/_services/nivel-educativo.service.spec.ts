import { TestBed, inject } from '@angular/core/testing';

import { NivelEducativoService } from './nivel-educativo.service';

describe('NivelEducativoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NivelEducativoService]
    });
  });

  it('should be created', inject([NivelEducativoService], (service: NivelEducativoService) => {
    expect(service).toBeTruthy();
  }));
});
