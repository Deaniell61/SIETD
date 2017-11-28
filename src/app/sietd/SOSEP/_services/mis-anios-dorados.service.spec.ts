import { TestBed, inject } from '@angular/core/testing';

import { MisAniosDoradosService } from './mis-anios-dorados.service';

describe('MisAniosDoradosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MisAniosDoradosService]
    });
  });

  it('should be created', inject([MisAniosDoradosService], (service: MisAniosDoradosService) => {
    expect(service).toBeTruthy();
  }));
});
