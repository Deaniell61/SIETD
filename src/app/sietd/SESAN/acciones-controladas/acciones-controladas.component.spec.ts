import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesControladasComponent } from './acciones-controladas.component';

describe('AccionesControladasComponent', () => {
  let component: AccionesControladasComponent;
  let fixture: ComponentFixture<AccionesControladasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesControladasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesControladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
