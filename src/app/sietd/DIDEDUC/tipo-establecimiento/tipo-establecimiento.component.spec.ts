import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEstablecimientoComponent } from './tipo-establecimiento.component';

describe('TipoEstablecimientoComponent', () => {
  let component: TipoEstablecimientoComponent;
  let fixture: ComponentFixture<TipoEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
