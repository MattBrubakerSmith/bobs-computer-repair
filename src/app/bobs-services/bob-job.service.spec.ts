import { TestBed } from '@angular/core/testing';

import { BobJobService } from './bob-job.service';

describe('RepairServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BobJobService = TestBed.get(BobJobService);
    expect(service).toBeTruthy();
  });
});
