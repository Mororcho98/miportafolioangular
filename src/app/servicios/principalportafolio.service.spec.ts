import { TestBed } from '@angular/core/testing';

import { PrincipalportafolioService } from './principalportafolio.service';

describe('PrincipalportafolioService', () => {
  let service: PrincipalportafolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalportafolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
