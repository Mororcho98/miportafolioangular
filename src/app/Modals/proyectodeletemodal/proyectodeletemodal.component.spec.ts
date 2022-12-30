import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectodeletemodalComponent } from './proyectodeletemodal.component';

describe('ProyectodeletemodalComponent', () => {
  let component: ProyectodeletemodalComponent;
  let fixture: ComponentFixture<ProyectodeletemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectodeletemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectodeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
