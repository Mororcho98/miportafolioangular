import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciadeletemodalComponent } from './experienciadeletemodal.component';

describe('ExperienciadeletemodalComponent', () => {
  let component: ExperienciadeletemodalComponent;
  let fixture: ComponentFixture<ExperienciadeletemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciadeletemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciadeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
