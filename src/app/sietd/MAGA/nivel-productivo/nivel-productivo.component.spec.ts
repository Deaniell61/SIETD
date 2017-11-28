import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelProductivoComponent } from './nivel-productivo.component';

describe('NivelProductivoComponent', () => {
  let component: NivelProductivoComponent;
  let fixture: ComponentFixture<NivelProductivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelProductivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelProductivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
