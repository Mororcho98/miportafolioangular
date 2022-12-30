import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesdashboardComponent } from './habilidadesdashboard.component';

describe('HabilidadesdashboardComponent', () => {
  let component: HabilidadesdashboardComponent;
  let fixture: ComponentFixture<HabilidadesdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
