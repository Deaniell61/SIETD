import { TestBed, inject } from '@angular/core/testing';

import { GranoBasicoService } from './grano-basico.service';

describe('GranoBasicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GranoBasicoService]
    });
  });

  it('should be created', inject([GranoBasicoService], (service: GranoBasicoService) => {
    expect(service).toBeTruthy();
  }));
});
