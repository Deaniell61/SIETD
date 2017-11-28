import { TestBed, inject } from '@angular/core/testing';

import { HogarescomunitariosService } from './hogarescomunitarios.service';

describe('HogarescomunitariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HogarescomunitariosService]
    });
  });

  it('should be created', inject([HogarescomunitariosService], (service: HogarescomunitariosService) => {
    expect(service).toBeTruthy();
  }));
});
