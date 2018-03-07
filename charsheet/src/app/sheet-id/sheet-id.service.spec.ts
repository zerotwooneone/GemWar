import { TestBed, inject } from '@angular/core/testing';

import { SheetIdService } from './sheet-id.service';

describe('SheetIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetIdService]
    });
  });

  it('should be created', inject([SheetIdService], (service: SheetIdService) => {
    expect(service).toBeTruthy();
  }));
});
