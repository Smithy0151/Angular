import { TestBed } from '@angular/core/testing';

import { FetchlogService } from './fetchlog.service';

describe('FetchlogService', () => {
  let service: FetchlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
