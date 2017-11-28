import { TestBed, inject } from '@angular/core/testing';

import { NivelProductivoFamiliaService } from './nivel-productivo-familia.service';

describe('NivelProductivoFamiliaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NivelProductivoFamiliaService]
    });
  });

  it('should be created', inject([NivelProductivoFamiliaService], (service: NivelProductivoFamiliaService) => {
    expect(service).toBeTruthy();
  }));
});
