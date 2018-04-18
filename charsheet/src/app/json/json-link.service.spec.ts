import { TestBed, inject } from '@angular/core/testing';

import { JsonLinkService } from './json-link.service';

describe('JsonLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonLinkService]
    });
  });

  it('should be created', inject([JsonLinkService], (service: JsonLinkService) => {
    expect(service).toBeTruthy();
  }));
});
