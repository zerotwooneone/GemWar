import { TestBed, inject } from '@angular/core/testing';

import { NewSheetService } from './new-sheet.service';

describe('NewSheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewSheetService]
    });
  });

  it('should be created', inject([NewSheetService], (service: NewSheetService) => {
    expect(service).toBeTruthy();
  }));
});
