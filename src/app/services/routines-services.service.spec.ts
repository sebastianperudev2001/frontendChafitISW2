import { TestBed } from '@angular/core/testing';

import { RoutinesServicesService } from './routines-services.service';

describe('RoutinesServicesService', () => {
  let service: RoutinesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutinesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
