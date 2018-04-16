import { TestBed, inject } from '@angular/core/testing';

import { MostRecentService } from './most-recent.service';
import { BrowserStorageService } from '../storage/browser-storage.service';
import { MockBrowserStorageService } from '../../testing/mock-services';

describe('MostRecentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MostRecentService,
        { provide: BrowserStorageService, useClass: MockBrowserStorageService }]
    });
  });

  it('should be created', inject([MostRecentService], (service: MostRecentService) => {
    expect(service).toBeTruthy();
  }));
  it('should return most recent', inject([MostRecentService], (service: MostRecentService) => {
    const expected = 'expected value';
    service.set(expected);
    const actual = service.get();
    expect(actual).toBe(expected);
  }));
});
