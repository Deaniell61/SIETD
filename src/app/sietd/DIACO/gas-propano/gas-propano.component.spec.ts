import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPropanoComponent } from './gas-propano.component';

describe('GasPropanoComponent', () => {
  let component: GasPropanoComponent;
  let fixture: ComponentFixture<GasPropanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasPropanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasPropanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
