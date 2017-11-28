import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaalimentariaComponent } from './asistenciaalimentaria.component';

describe('AsistenciaalimentariaComponent', () => {
  let component: AsistenciaalimentariaComponent;
  let fixture: ComponentFixture<AsistenciaalimentariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaalimentariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaalimentariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
