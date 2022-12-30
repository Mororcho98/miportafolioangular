import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneseducacionComponent } from './botoneseducacion.component';

describe('BotoneseducacionComponent', () => {
  let component: BotoneseducacionComponent;
  let fixture: ComponentFixture<BotoneseducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneseducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneseducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
