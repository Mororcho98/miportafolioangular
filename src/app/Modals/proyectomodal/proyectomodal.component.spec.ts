import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectomodalComponent } from './proyectomodal.component';

describe('ProyectomodalComponent', () => {
  let component: ProyectomodalComponent;
  let fixture: ComponentFixture<ProyectomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectomodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
