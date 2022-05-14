import { TestBed } from '@angular/core/testing';

import { GetIpAddressService } from './get-ip-address.service';

describe('GetIpAddressService', () => {
  let service: GetIpAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIpAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
