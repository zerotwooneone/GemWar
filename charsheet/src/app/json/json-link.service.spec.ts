import { TestBed, inject } from '@angular/core/testing';

import { JsonLinkService } from './json-link.service';
import { DomSanitizer } from '@angular/platform-browser';
import { JsonService } from './json.service';

describe('JsonLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonLinkService, DomSanitizer, JsonService]
    });
  });

  it(
    'should be created',
    inject([JsonLinkService], (service: JsonLinkService) => {
      expect(service).toBeTruthy();
    })
  );
});
