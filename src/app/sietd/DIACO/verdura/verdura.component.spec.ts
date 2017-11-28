import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerduraComponent } from './verdura.component';

describe('VerduraComponent', () => {
  let component: VerduraComponent;
  let fixture: ComponentFixture<VerduraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerduraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
