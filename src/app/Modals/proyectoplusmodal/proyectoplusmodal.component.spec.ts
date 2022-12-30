import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoplusmodalComponent } from './proyectoplusmodal.component';

describe('ProyectoplusmodalComponent', () => {
  let component: ProyectoplusmodalComponent;
  let fixture: ComponentFixture<ProyectoplusmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoplusmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoplusmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
