import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonescardexperienciaComponent } from './botonescardexperiencia.component';

describe('BotonescardexperienciaComponent', () => {
  let component: BotonescardexperienciaComponent;
  let fixture: ComponentFixture<BotonescardexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonescardexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonescardexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
