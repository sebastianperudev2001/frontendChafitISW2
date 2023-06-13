import { TestBed } from '@angular/core/testing';

import { StatServicesService } from './stat-services.service';

describe('StatServicesService', () => {
  let service: StatServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
