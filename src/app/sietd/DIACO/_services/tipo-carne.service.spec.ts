import { TestBed, inject } from '@angular/core/testing';

import { TipoCarneService } from './tipo-carne.service';

describe('TipoCarneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoCarneService]
    });
  });

  it('should be created', inject([TipoCarneService], (service: TipoCarneService) => {
    expect(service).toBeTruthy();
  }));
});
