import { TestBed, inject } from '@angular/core/testing';

import { MobiliarioService } from './mobiliario.service';

describe('MobiliarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobiliarioService]
    });
  });

  it('should be created', inject([MobiliarioService], (service: MobiliarioService) => {
    expect(service).toBeTruthy();
  }));
});
