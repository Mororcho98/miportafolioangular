import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraprogresosoftComponent } from './barraprogresosoft.component';

describe('BarraprogresosoftComponent', () => {
  let component: BarraprogresosoftComponent;
  let fixture: ComponentFixture<BarraprogresosoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraprogresosoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraprogresosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
