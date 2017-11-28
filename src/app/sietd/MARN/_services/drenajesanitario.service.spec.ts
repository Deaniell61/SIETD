import { TestBed, inject } from '@angular/core/testing';

import { DrenajesanitarioService } from './drenajesanitario.service';

describe('DrenajesanitarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrenajesanitarioService]
    });
  });

  it('should be created', inject([DrenajesanitarioService], (service: DrenajesanitarioService) => {
    expect(service).toBeTruthy();
  }));
});
