import { TestBed, inject } from '@angular/core/testing';

import { NiniosRecuperadosService } from './ninios-recuperados.service';

describe('NiniosRecuperadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NiniosRecuperadosService]
    });
  });

  it('should be created', inject([NiniosRecuperadosService], (service: NiniosRecuperadosService) => {
    expect(service).toBeTruthy();
  }));
});
