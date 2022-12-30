import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadsoftdeletemodalComponent } from './habilidadsoftdeletemodal.component';

describe('HabilidadsoftdeletemodalComponent', () => {
  let component: HabilidadsoftdeletemodalComponent;
  let fixture: ComponentFixture<HabilidadsoftdeletemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadsoftdeletemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadsoftdeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
