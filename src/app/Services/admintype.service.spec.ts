import { TestBed } from '@angular/core/testing';

import { AdmintypeService } from './admintype.service';

describe('AdmintypeService', () => {
  let service: AdmintypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmintypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
