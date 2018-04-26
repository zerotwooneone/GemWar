import { TestBed, inject } from '@angular/core/testing';

import { CompressionService } from './compression.service';
import { LZStringService } from 'ng-lz-string';

describe('CompressionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompressionService, LZStringService]
    });
  });

  it(
    'should be created',
    inject([CompressionService], (service: CompressionService) => {
      expect(service).toBeTruthy();
    })
  );
});
