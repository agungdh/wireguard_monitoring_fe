import { TestBed } from '@angular/core/testing';

import { WireguardService } from './wireguard.service';

describe('WireguardService', () => {
  let service: WireguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WireguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
