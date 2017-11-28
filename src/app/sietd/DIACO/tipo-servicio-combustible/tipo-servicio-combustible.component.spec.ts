import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicioCombustibleComponent } from './tipo-servicio-combustible.component';

describe('TipoServicioCombustibleComponent', () => {
  let component: TipoServicioCombustibleComponent;
  let fixture: ComponentFixture<TipoServicioCombustibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicioCombustibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicioCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
