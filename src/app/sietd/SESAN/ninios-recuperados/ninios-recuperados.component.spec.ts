import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiniosRecuperadosComponent } from './ninios-recuperados.component';

describe('NiniosRecuperadosComponent', () => {
  let component: NiniosRecuperadosComponent;
  let fixture: ComponentFixture<NiniosRecuperadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiniosRecuperadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiniosRecuperadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
