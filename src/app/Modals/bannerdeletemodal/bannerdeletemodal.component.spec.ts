import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerdeletemodalComponent } from './bannerdeletemodal.component';

describe('BannerdeletemodalComponent', () => {
  let component: BannerdeletemodalComponent;
  let fixture: ComponentFixture<BannerdeletemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerdeletemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerdeletemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
