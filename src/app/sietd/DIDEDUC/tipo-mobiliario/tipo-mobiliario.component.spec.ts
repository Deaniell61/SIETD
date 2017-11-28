import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMobiliarioComponent } from './tipo-mobiliario.component';

describe('TipoMobiliarioComponent', () => {
  let component: TipoMobiliarioComponent;
  let fixture: ComponentFixture<TipoMobiliarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMobiliarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
