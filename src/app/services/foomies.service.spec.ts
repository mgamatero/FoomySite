import { TestBed } from '@angular/core/testing';

import { FoomiesService } from './foomies.service';

describe('FoomiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoomiesService = TestBed.get(FoomiesService);
    expect(service).toBeTruthy();
  });
});
