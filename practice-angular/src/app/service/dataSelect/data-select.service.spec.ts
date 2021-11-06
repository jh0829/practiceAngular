import { TestBed } from '@angular/core/testing';

import { DataSelectService } from './data-select.service';

describe('DataSelectService', () => {
  let service: DataSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
