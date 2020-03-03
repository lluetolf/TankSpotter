import { TestBed } from '@angular/core/testing';

import { SpotReportService } from './spot-report.service';

describe('SpotReportServiceService', () => {
  let service: SpotReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
