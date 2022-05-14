import { TestBed } from '@angular/core/testing';

import { ValueSharedService } from './value-shared.service';

describe('ValueSharedService', () => {
  let service: ValueSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
