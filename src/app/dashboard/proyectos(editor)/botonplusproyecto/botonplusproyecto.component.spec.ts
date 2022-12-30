import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonplusproyectoComponent } from './botonplusproyecto.component';

describe('BotonplusproyectoComponent', () => {
  let component: BotonplusproyectoComponent;
  let fixture: ComponentFixture<BotonplusproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonplusproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonplusproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
