import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFrutasComponent } from './detalle-frutas.component';

describe('DetalleFrutasComponent', () => {
  let component: DetalleFrutasComponent;
  let fixture: ComponentFixture<DetalleFrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleFrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
