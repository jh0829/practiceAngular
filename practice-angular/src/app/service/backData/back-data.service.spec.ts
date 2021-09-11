import { TestBed } from '@angular/core/testing';

import { BackDataService } from './back-data.service';

describe('BackDataService', () => {
  let service: BackDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
