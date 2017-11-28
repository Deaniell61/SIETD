import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniosPecuariosComponent } from './danios-pecuarios.component';

describe('DaniosPecuariosComponent', () => {
  let component: DaniosPecuariosComponent;
  let fixture: ComponentFixture<DaniosPecuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaniosPecuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaniosPecuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
