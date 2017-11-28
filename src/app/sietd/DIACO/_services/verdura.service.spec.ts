import { TestBed, inject } from '@angular/core/testing';

import { VerduraService } from './verdura.service';

describe('VerduraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerduraService]
    });
  });

  it('should be created', inject([VerduraService], (service: VerduraService) => {
    expect(service).toBeTruthy();
  }));
});
