import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleinabComponent } from './detalleinab.component';

describe('DetalleinabComponent', () => {
  let component: DetalleinabComponent;
  let fixture: ComponentFixture<DetalleinabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleinabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleinabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
