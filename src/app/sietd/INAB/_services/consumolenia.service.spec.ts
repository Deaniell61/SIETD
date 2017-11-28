import { TestBed, inject } from '@angular/core/testing';

import { ConsumoleniaService } from './consumolenia.service';

describe('ConsumoleniaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumoleniaService]
    });
  });

  it('should be created', inject([ConsumoleniaService], (service: ConsumoleniaService) => {
    expect(service).toBeTruthy();
  }));
});
