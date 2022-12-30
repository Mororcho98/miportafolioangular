import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonsobremiComponent } from './botonsobremi.component';

describe('BotonsobremiComponent', () => {
  let component: BotonsobremiComponent;
  let fixture: ComponentFixture<BotonsobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonsobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonsobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
