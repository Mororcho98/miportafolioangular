import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonplushabilidadComponent } from './botonplushabilidad.component';

describe('BotonplushabilidadComponent', () => {
  let component: BotonplushabilidadComponent;
  let fixture: ComponentFixture<BotonplushabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonplushabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonplushabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
