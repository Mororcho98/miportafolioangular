import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaplusmodalComponent } from './experienciaplusmodal.component';

describe('ExperienciaplusmodalComponent', () => {
  let component: ExperienciaplusmodalComponent;
  let fixture: ComponentFixture<ExperienciaplusmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaplusmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaplusmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
