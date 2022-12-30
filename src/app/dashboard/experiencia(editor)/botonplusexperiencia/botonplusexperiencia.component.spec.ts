import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonplusexperienciaComponent } from './botonplusexperiencia.component';

describe('BotonplusexperienciaComponent', () => {
  let component: BotonplusexperienciaComponent;
  let fixture: ComponentFixture<BotonplusexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonplusexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonplusexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
