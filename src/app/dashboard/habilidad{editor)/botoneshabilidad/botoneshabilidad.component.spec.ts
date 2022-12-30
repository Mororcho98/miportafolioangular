import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneshabilidadComponent } from './botoneshabilidad.component';

describe('BotoneshabilidadComponent', () => {
  let component: BotoneshabilidadComponent;
  let fixture: ComponentFixture<BotoneshabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneshabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneshabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
