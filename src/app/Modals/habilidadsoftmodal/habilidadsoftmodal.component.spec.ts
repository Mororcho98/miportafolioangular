import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadsoftmodalComponent } from './habilidadsoftmodal.component';

describe('HabilidadsoftmodalComponent', () => {
  let component: HabilidadsoftmodalComponent;
  let fixture: ComponentFixture<HabilidadsoftmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadsoftmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadsoftmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
