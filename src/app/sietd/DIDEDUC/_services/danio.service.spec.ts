import { TestBed, inject } from '@angular/core/testing';

import { DanioService } from './danio.service';

describe('DanioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DanioService]
    });
  });

  it('should be created', inject([DanioService], (service: DanioService) => {
    expect(service).toBeTruthy();
  }));
});
