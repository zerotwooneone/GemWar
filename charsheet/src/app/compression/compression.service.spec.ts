import { TestBed, inject } from '@angular/core/testing';

import { CompressionService } from './compression.service';

describe('CompressionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompressionService]
    });
  });

  it('should be created', inject([CompressionService], (service: CompressionService) => {
    expect(service).toBeTruthy();
  }));
});
