import { TestBed, inject } from '@angular/core/testing';

import { DetalleinabService } from './detalleinab.service';

describe('DetalleinabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleinabService]
    });
  });

  it('should be created', inject([DetalleinabService], (service: DetalleinabService) => {
    expect(service).toBeTruthy();
  }));
});
