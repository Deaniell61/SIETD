import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDanioComponent } from './tipo-danio.component';

describe('TipoDanioComponent', () => {
  let component: TipoDanioComponent;
  let fixture: ComponentFixture<TipoDanioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDanioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDanioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
