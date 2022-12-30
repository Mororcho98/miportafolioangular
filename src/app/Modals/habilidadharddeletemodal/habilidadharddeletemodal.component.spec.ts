import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadharddeletemodalComponent } from './habilidadharddeletemodal.component';

describe('HabilidadharddeletemodalComponent', () => {
  let component: HabilidadharddeletemodalComponent;
  let fixture: ComponentFixture<HabilidadharddeletemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadharddeletemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadharddeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
