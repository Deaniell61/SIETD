import { TestBed, inject } from '@angular/core/testing';

import { FenomenoService } from './fenomeno.service';

describe('FenomenoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FenomenoService]
    });
  });

  it('should be created', inject([FenomenoService], (service: FenomenoService) => {
    expect(service).toBeTruthy();
  }));
});
