import { TestBed } from '@angular/core/testing';

import { PreferenceGuard } from './preference.guard';

describe('PreferenceGuard', () => {
  let guard: PreferenceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreferenceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
