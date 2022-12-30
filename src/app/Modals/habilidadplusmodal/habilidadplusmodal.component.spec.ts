import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadplusmodalComponent } from './habilidadplusmodal.component';

describe('HabilidadplusmodalComponent', () => {
  let component: HabilidadplusmodalComponent;
  let fixture: ComponentFixture<HabilidadplusmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadplusmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadplusmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
