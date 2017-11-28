import { TestBed, inject } from '@angular/core/testing';

import { ServicioSocialService } from './servicio-social.service';

describe('ServicioSocialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioSocialService]
    });
  });

  it('should be created', inject([ServicioSocialService], (service: ServicioSocialService) => {
    expect(service).toBeTruthy();
  }));
});
