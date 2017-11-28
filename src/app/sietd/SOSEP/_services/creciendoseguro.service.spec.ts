import { TestBed, inject } from '@angular/core/testing';

import { CreciendoseguroService } from './creciendoseguro.service';

describe('CreciendoseguroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreciendoseguroService]
    });
  });

  it('should be created', inject([CreciendoseguroService], (service: CreciendoseguroService) => {
    expect(service).toBeTruthy();
  }));
});
