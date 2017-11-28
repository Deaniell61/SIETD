import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasurerosClandestinosComponent } from './basureros-clandestinos.component';

describe('BasurerosClandestinosComponent', () => {
  let component: BasurerosClandestinosComponent;
  let fixture: ComponentFixture<BasurerosClandestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasurerosClandestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasurerosClandestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
