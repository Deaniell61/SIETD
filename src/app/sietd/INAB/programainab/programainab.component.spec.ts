import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramainabComponent } from './programainab.component';

describe('ProgramainabComponent', () => {
  let component: ProgramainabComponent;
  let fixture: ComponentFixture<ProgramainabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramainabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramainabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
