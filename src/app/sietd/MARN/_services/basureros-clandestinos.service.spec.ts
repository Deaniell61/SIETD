import { TestBed, inject } from '@angular/core/testing';

import { BasurerosClandestinosService } from './basureros-clandestinos.service';

describe('BasurerosClandestinosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasurerosClandestinosService]
    });
  });

  it('should be created', inject([BasurerosClandestinosService], (service: BasurerosClandestinosService) => {
    expect(service).toBeTruthy();
  }));
});
