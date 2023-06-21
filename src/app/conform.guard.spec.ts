import { TestBed } from '@angular/core/testing';

import { ConformGuard } from './conform.guard';

describe('ConformGuard', () => {
  let guard: ConformGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConformGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
