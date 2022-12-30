import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesproyectoComponent } from './botonesproyecto.component';

describe('BotonesproyectoComponent', () => {
  let component: BotonesproyectoComponent;
  let fixture: ComponentFixture<BotonesproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
