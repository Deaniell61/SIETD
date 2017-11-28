import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCarneComponent } from './tipo-carne.component';

describe('TipoCarneComponent', () => {
  let component: TipoCarneComponent;
  let fixture: ComponentFixture<TipoCarneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCarneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
