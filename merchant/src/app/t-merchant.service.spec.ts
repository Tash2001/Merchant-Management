import { TestBed } from '@angular/core/testing';

import { TMerchantService } from './t-merchant.service';

describe('TMerchantService', () => {
  let service: TMerchantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TMerchantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
