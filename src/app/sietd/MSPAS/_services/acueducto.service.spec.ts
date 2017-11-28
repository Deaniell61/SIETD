import { TestBed, inject } from '@angular/core/testing';

import { AcueductoService } from './acueducto.service';

describe('AcueductoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcueductoService]
    });
  });

  it('should be created', inject([AcueductoService], (service: AcueductoService) => {
    expect(service).toBeTruthy();
  }));
});
