import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrenajesanitarioComponent } from './drenajesanitario.component';

describe('DrenajesanitarioComponent', () => {
  let component: DrenajesanitarioComponent;
  let fixture: ComponentFixture<DrenajesanitarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrenajesanitarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrenajesanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
