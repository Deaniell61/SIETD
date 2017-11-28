import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenomenoComponent } from './fenomeno.component';

describe('FenomenoComponent', () => {
  let component: FenomenoComponent;
  let fixture: ComponentFixture<FenomenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenomenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenomenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
