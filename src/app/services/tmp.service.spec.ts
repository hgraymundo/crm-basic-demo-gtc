import { TestBed } from '@angular/core/testing';

import { TmpService } from './tmp.service';

describe('TmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TmpService = TestBed.get(TmpService);
    expect(service).toBeTruthy();
  });
});
