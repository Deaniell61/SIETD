import { TestBed, inject } from '@angular/core/testing';

import { TipoDanioService } from './tipo-danio.service';

describe('TipoDanioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoDanioService]
    });
  });

  it('should be created', inject([TipoDanioService], (service: TipoDanioService) => {
    expect(service).toBeTruthy();
  }));
});
