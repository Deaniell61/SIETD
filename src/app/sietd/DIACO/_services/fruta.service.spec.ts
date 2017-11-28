import { TestBed, inject } from '@angular/core/testing';

import { FrutaService } from './fruta.service';

describe('FrutaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrutaService]
    });
  });

  it('should be created', inject([FrutaService], (service: FrutaService) => {
    expect(service).toBeTruthy();
  }));
});
