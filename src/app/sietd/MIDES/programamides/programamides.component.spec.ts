import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramamidesComponent } from './programamides.component';

describe('ProgramamidesComponent', () => {
  let component: ProgramamidesComponent;
  let fixture: ComponentFixture<ProgramamidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramamidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramamidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
