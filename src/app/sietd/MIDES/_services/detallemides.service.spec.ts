import { TestBed, inject } from '@angular/core/testing';

import { DetallemidesService } from './detallemides.service';

describe('DetallemidesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetallemidesService]
    });
  });

  it('should be created', inject([DetallemidesService], (service: DetallemidesService) => {
    expect(service).toBeTruthy();
  }));
});
