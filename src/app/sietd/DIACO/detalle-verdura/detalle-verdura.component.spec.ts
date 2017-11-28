import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVerduraComponent } from './detalle-verdura.component';

describe('DetalleVerduraComponent', () => {
  let component: DetalleVerduraComponent;
  let fixture: ComponentFixture<DetalleVerduraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleVerduraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVerduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
