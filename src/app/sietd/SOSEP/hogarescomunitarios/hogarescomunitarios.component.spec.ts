import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HogarescomunitariosComponent } from './hogarescomunitarios.component';

describe('HogarescomunitariosComponent', () => {
  let component: HogarescomunitariosComponent;
  let fixture: ComponentFixture<HogarescomunitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HogarescomunitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HogarescomunitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
