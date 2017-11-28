import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisAniosDoradosComponent } from './mis-anios-dorados.component';

describe('MisAniosDoradosComponent', () => {
  let component: MisAniosDoradosComponent;
  let fixture: ComponentFixture<MisAniosDoradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisAniosDoradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisAniosDoradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
