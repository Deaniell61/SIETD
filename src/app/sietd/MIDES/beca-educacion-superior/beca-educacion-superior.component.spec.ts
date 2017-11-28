import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaEducacionSuperiorComponent } from './beca-educacion-superior.component';

describe('BecaEducacionSuperiorComponent', () => {
  let component: BecaEducacionSuperiorComponent;
  let fixture: ComponentFixture<BecaEducacionSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecaEducacionSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecaEducacionSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
