import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraprogresohardComponent } from './barraprogresohard.component';

describe('BarraprogresohardComponent', () => {
  let component: BarraprogresohardComponent;
  let fixture: ComponentFixture<BarraprogresohardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraprogresohardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraprogresohardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
