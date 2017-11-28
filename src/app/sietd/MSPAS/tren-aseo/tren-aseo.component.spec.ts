import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenAseoComponent } from './tren-aseo.component';

describe('TrenAseoComponent', () => {
  let component: TrenAseoComponent;
  let fixture: ComponentFixture<TrenAseoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrenAseoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenAseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
