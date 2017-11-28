import { TestBed, inject } from '@angular/core/testing';

import { DaniosAgricolasService } from './danios-agricolas.service';

describe('DaniosAgricolasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaniosAgricolasService]
    });
  });

  it('should be created', inject([DaniosAgricolasService], (service: DaniosAgricolasService) => {
    expect(service).toBeTruthy();
  }));
});
