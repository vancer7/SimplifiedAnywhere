import { TestBed } from '@angular/core/testing';

import { LinkBlockService } from './link-block.service';

describe('LinkblockService', () => {
  let service: LinkBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
