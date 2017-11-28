import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemidesComponent } from './detallemides.component';

describe('DetallemidesComponent', () => {
  let component: DetallemidesComponent;
  let fixture: ComponentFixture<DetallemidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallemidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallemidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
