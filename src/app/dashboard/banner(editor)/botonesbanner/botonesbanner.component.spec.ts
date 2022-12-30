import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesbannerComponent } from './botonesbanner.component';

describe('BotonesbannerComponent', () => {
  let component: BotonesbannerComponent;
  let fixture: ComponentFixture<BotonesbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
