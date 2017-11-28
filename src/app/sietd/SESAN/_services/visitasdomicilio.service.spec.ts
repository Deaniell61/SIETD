import { TestBed, inject } from '@angular/core/testing';

import { VisitasdomicilioService } from './visitasdomicilio.service';

describe('VisitasdomicilioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitasdomicilioService]
    });
  });

  it('should be created', inject([VisitasdomicilioService], (service: VisitasdomicilioService) => {
    expect(service).toBeTruthy();
  }));
});
