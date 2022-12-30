import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhabilidadComponent } from './cardhabilidad.component';

describe('CardhabilidadComponent', () => {
  let component: CardhabilidadComponent;
  let fixture: ComponentFixture<CardhabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardhabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardhabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
