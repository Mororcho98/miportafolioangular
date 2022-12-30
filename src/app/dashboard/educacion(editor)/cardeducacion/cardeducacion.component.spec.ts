import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeducacionComponent } from './cardeducacion.component';

describe('CardeducacionComponent', () => {
  let component: CardeducacionComponent;
  let fixture: ComponentFixture<CardeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardeducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
