import { TestBed } from '@angular/core/testing';

import { DocumentDashboardService } from './document-dashboard.service';

describe('DocumentDashboardService', () => {
  let service: DocumentDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
