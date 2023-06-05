import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { thirdGuard } from './third.guard';

describe('thirdGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => thirdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
