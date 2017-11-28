import { TestBed, inject } from '@angular/core/testing';

import { VertederosLegalesService } from './vertederos-legales.service';

describe('VertederosLegalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VertederosLegalesService]
    });
  });

  it('should be created', inject([VertederosLegalesService], (service: VertederosLegalesService) => {
    expect(service).toBeTruthy();
  }));
});
