import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniosAgricolasComponent } from './danios-agricolas.component';

describe('DaniosAgricolasComponent', () => {
  let component: DaniosAgricolasComponent;
  let fixture: ComponentFixture<DaniosAgricolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaniosAgricolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaniosAgricolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
