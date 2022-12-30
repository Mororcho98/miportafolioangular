import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducaciondeletemodalComponent } from './educaciondeletemodal.component';

describe('EducaciondeletemodalComponent', () => {
  let component: EducaciondeletemodalComponent;
  let fixture: ComponentFixture<EducaciondeletemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducaciondeletemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducaciondeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
