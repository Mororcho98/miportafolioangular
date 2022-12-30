import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardexperienciaComponent } from './cardexperiencia.component';

describe('CardexperienciaComponent', () => {
  let component: CardexperienciaComponent;
  let fixture: ComponentFixture<CardexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
