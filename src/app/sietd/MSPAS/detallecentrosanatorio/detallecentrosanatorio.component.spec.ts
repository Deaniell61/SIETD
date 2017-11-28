import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecentrosanatorioComponent } from './detallecentrosanatorio.component';

describe('DetallecentrosanatorioComponent', () => {
  let component: DetallecentrosanatorioComponent;
  let fixture: ComponentFixture<DetallecentrosanatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecentrosanatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecentrosanatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
