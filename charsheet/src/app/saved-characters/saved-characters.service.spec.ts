import { TestBed, inject } from '@angular/core/testing';

import { SavedCharactersService } from './saved-characters.service';

describe('SavedCharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedCharactersService]
    });
  });

  it('should be created', inject([SavedCharactersService], (service: SavedCharactersService) => {
    expect(service).toBeTruthy();
  }));
});
