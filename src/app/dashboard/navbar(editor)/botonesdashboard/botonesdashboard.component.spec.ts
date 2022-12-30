import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesdashboardComponent } from './botonesdashboard.component';

describe('BotonesdashboardComponent', () => {
  let component: BotonesdashboardComponent;
  let fixture: ComponentFixture<BotonesdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
