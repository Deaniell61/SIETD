import { TestBed, inject } from '@angular/core/testing';

import { PecuarioService } from './pecuario.service';

describe('PecuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PecuarioService]
    });
  });

  it('should be created', inject([PecuarioService], (service: PecuarioService) => {
    expect(service).toBeTruthy();
  }));
});
