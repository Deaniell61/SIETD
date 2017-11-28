import { TestBed, inject } from '@angular/core/testing';

import { ProgramainabService } from './programainab.service';

describe('ProgramainabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramainabService]
    });
  });

  it('should be created', inject([ProgramainabService], (service: ProgramainabService) => {
    expect(service).toBeTruthy();
  }));
});
