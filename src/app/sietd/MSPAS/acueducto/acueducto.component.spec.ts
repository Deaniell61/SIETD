import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcueductoComponent } from './acueducto.component';

describe('AcueductoComponent', () => {
  let component: AcueductoComponent;
  let fixture: ComponentFixture<AcueductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcueductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcueductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
