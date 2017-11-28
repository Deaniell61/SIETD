import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosSanatariosComponent } from './centros-sanatarios.component';

describe('CentrosSanatariosComponent', () => {
  let component: CentrosSanatariosComponent;
  let fixture: ComponentFixture<CentrosSanatariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosSanatariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosSanatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
