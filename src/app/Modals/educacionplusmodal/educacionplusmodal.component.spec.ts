import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionplusmodalComponent } from './educacionplusmodal.component';

describe('EducacionplusmodalComponent', () => {
  let component: EducacionplusmodalComponent;
  let fixture: ComponentFixture<EducacionplusmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionplusmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionplusmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
