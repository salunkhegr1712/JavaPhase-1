import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { secondGuard } from './second.guard';

describe('secondGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secondGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
