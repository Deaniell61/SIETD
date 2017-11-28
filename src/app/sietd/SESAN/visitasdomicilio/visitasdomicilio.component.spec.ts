import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasdomicilioComponent } from './visitasdomicilio.component';

describe('VisitasdomicilioComponent', () => {
  let component: VisitasdomicilioComponent;
  let fixture: ComponentFixture<VisitasdomicilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitasdomicilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasdomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
