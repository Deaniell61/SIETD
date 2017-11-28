import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecuarioComponent } from './pecuario.component';

describe('PecuarioComponent', () => {
  let component: PecuarioComponent;
  let fixture: ComponentFixture<PecuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
