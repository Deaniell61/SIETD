import { TestBed, inject } from '@angular/core/testing';

import { PlantaTraAguaService } from './planta-tra-agua.service';

describe('PlantaTraAguaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantaTraAguaService]
    });
  });

  it('should be created', inject([PlantaTraAguaService], (service: PlantaTraAguaService) => {
    expect(service).toBeTruthy();
  }));
});
