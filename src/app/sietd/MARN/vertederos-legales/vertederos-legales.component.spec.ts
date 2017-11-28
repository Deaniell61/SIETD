import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertederosLegalesComponent } from './vertederos-legales.component';

describe('VertederosLegalesComponent', () => {
  let component: VertederosLegalesComponent;
  let fixture: ComponentFixture<VertederosLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertederosLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertederosLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
