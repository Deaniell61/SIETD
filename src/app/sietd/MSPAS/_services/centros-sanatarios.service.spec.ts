import { TestBed, inject } from '@angular/core/testing';

import { CentrosSanatariosService } from './centros-sanatarios.service';

describe('CentrosSanatariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentrosSanatariosService]
    });
  });

  it('should be created', inject([CentrosSanatariosService], (service: CentrosSanatariosService) => {
    expect(service).toBeTruthy();
  }));
});
