import { TestBed, inject } from '@angular/core/testing';

import { DetalleFrutasService } from './detalle-frutas.service';

describe('DetalleFrutasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleFrutasService]
    });
  });

  it('should be created', inject([DetalleFrutasService], (service: DetalleFrutasService) => {
    expect(service).toBeTruthy();
  }));
});
