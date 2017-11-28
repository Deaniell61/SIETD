import { TestBed, inject } from '@angular/core/testing';

import { GasPropanoService } from './gas-propano.service';

describe('GasPropanoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GasPropanoService]
    });
  });

  it('should be created', inject([GasPropanoService], (service: GasPropanoService) => {
    expect(service).toBeTruthy();
  }));
});
