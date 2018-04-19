import { TestBed, inject } from '@angular/core/testing';

import { SavedCharacterModelService } from './saved-character-model.service';
import { JsonService } from '../json/json.service';
import { FileReaderService } from './file-reader.service';
import {
  MockFormStorageService,
  MockFileReaderService
} from '../../testing/mock-services';
import { FormStorageService } from '../storage/form-storage.service';

describe('SavedCharacterModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SavedCharacterModelService,
        JsonService,
        { provide: FileReaderService, useClass: MockFileReaderService },
        { provide: FormStorageService, useClass: MockFormStorageService }
      ]
    });
  });

  it(
    'should be created',
    inject(
      [SavedCharacterModelService],
      (service: SavedCharacterModelService) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
