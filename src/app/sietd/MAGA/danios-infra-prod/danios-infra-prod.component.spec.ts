import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniosInfraProdComponent } from './danios-infra-prod.component';

describe('DaniosInfraProdComponent', () => {
  let component: DaniosInfraProdComponent;
  let fixture: ComponentFixture<DaniosInfraProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaniosInfraProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaniosInfraProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
