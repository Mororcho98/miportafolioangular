import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadhardmodalComponent } from './habilidadhardmodal.component';

describe('HabilidadhardmodalComponent', () => {
  let component: HabilidadhardmodalComponent;
  let fixture: ComponentFixture<HabilidadhardmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadhardmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadhardmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
