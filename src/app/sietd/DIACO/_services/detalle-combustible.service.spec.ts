import { TestBed, inject } from '@angular/core/testing';

import { DetalleCombustibleService } from './detalle-combustible.service';

describe('DetalleCombustibleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleCombustibleService]
    });
  });

  it('should be created', inject([DetalleCombustibleService], (service: DetalleCombustibleService) => {
    expect(service).toBeTruthy();
  }));
});
