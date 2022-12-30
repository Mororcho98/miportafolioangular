import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneshabilidadhardComponent } from './botoneshabilidadhard.component';

describe('BotoneshabilidadhardComponent', () => {
  let component: BotoneshabilidadhardComponent;
  let fixture: ComponentFixture<BotoneshabilidadhardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneshabilidadhardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneshabilidadhardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
