import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesmodalComponent } from './redesmodal.component';

describe('RedesmodalComponent', () => {
  let component: RedesmodalComponent;
  let fixture: ComponentFixture<RedesmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
