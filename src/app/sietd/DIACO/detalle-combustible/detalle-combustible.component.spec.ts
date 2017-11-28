import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCombustibleComponent } from './detalle-combustible.component';

describe('DetalleCombustibleComponent', () => {
  let component: DetalleCombustibleComponent;
  let fixture: ComponentFixture<DetalleCombustibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCombustibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
