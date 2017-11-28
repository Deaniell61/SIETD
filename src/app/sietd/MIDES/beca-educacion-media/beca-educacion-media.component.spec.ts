import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaEducacionMediaComponent } from './beca-educacion-media.component';

describe('BecaEducacionMediaComponent', () => {
  let component: BecaEducacionMediaComponent;
  let fixture: ComponentFixture<BecaEducacionMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecaEducacionMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecaEducacionMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
