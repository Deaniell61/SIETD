import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreciendoseguroComponent } from './creciendoseguro.component';

describe('CreciendoseguroComponent', () => {
  let component: CreciendoseguroComponent;
  let fixture: ComponentFixture<CreciendoseguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreciendoseguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreciendoseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
