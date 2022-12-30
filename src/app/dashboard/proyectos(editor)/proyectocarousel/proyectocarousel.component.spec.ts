import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectocarouselComponent } from './proyectocarousel.component';

describe('ProyectocarouselComponent', () => {
  let component: ProyectocarouselComponent;
  let fixture: ComponentFixture<ProyectocarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectocarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectocarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
