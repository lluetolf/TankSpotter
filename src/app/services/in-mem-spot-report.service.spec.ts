import { TestBed } from '@angular/core/testing';

import { InMemSpotReportService } from './in-mem-spot-report.service';

describe('InMemSpotReportService', () => {
  let service: InMemSpotReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemSpotReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
