import { TestBed, inject } from '@angular/core/testing';

import { TrenAseoService } from './tren-aseo.service';

describe('TrenAseoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrenAseoService]
    });
  });

  it('should be created', inject([TrenAseoService], (service: TrenAseoService) => {
    expect(service).toBeTruthy();
  }));
});
