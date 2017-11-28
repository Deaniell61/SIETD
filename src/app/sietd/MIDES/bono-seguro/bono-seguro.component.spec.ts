import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoSeguroComponent } from './bono-seguro.component';

describe('BonoSeguroComponent', () => {
  let component: BonoSeguroComponent;
  let fixture: ComponentFixture<BonoSeguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoSeguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
