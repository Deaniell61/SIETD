import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GranosBasicosComponent } from './granos-basicos.component';

describe('GranosBasicosComponent', () => {
  let component: GranosBasicosComponent;
  let fixture: ComponentFixture<GranosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranosBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GranosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
