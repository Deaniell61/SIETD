import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaTraAguaComponent } from './planta-tra-agua.component';

describe('PlantaTraAguaComponent', () => {
  let component: PlantaTraAguaComponent;
  let fixture: ComponentFixture<PlantaTraAguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaTraAguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaTraAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
