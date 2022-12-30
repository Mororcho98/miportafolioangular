import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonpluseducacionComponent } from './botonpluseducacion.component';

describe('BotonpluseducacionComponent', () => {
  let component: BotonpluseducacionComponent;
  let fixture: ComponentFixture<BotonpluseducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonpluseducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonpluseducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
