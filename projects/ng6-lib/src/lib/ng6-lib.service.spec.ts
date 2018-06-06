import { TestBed, inject } from '@angular/core/testing';

import { Ng6LibService } from './ng6-lib.service';

describe('Ng6LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng6LibService]
    });
  });

  it('should be created', inject([Ng6LibService], (service: Ng6LibService) => {
    expect(service).toBeTruthy();
  }));
});
