import { TestBed, inject } from '@angular/core/testing';

import { CultivoService } from './cultivo.service';

describe('CultivoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CultivoService]
    });
  });

  it('should be created', inject([CultivoService], (service: CultivoService) => {
    expect(service).toBeTruthy();
  }));
});
