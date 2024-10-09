import { TestBed } from '@angular/core/testing';

import { DocspecidService } from './docspecid.service';

describe('DocspecidService', () => {
  let service: DocspecidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocspecidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
