import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioSocialComponent } from './servicio-social.component';

describe('ServicioSocialComponent', () => {
  let component: ServicioSocialComponent;
  let fixture: ComponentFixture<ServicioSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
