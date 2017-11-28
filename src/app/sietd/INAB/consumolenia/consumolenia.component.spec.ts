import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoleniaComponent } from './consumolenia.component';

describe('ConsumoleniaComponent', () => {
  let component: ConsumoleniaComponent;
  let fixture: ComponentFixture<ConsumoleniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumoleniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoleniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
