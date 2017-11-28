import { TestBed, inject } from '@angular/core/testing';

import { ProgramamidesService } from './programamides.service';

describe('ProgramamidesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramamidesService]
    });
  });

  it('should be created', inject([ProgramamidesService], (service: ProgramamidesService) => {
    expect(service).toBeTruthy();
  }));
});
