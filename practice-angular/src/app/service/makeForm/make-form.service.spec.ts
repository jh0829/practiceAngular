import { TestBed } from '@angular/core/testing';

import { MakeFormService } from './make-form.service';

describe('MakeFormService', () => {
  let service: MakeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
