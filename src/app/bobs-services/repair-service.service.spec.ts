import { TestBed } from '@angular/core/testing';

import { RepairServiceService } from './repair-service.service';

describe('RepairServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairServiceService = TestBed.get(RepairServiceService);
    expect(service).toBeTruthy();
  });
});
