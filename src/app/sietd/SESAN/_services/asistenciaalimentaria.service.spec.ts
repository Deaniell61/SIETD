import { TestBed, inject } from '@angular/core/testing';

import { AsistenciaalimentariaService } from './asistenciaalimentaria.service';

describe('AsistenciaalimentariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsistenciaalimentariaService]
    });
  });

  it('should be created', inject([AsistenciaalimentariaService], (service: AsistenciaalimentariaService) => {
    expect(service).toBeTruthy();
  }));
});
