import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanioComponent } from './danio.component';

describe('DanioComponent', () => {
  let component: DanioComponent;
  let fixture: ComponentFixture<DanioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
