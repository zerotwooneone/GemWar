import { Injectable } from '@angular/core';
import { JsonService } from '../json/json.service';
import { FileReaderService } from './file-reader.service';
import { SavedCharacterModel } from '../saved-characters/saved-character-model';
import { FormStorageService } from '../storage/form-storage.service';

@Injectable()
export class SavedCharacterModelService {
  constructor(
    private jsonService: JsonService,
    private fileReaderService: FileReaderService,
    private formStorageService: FormStorageService
  ) {}

  getFromFiles(
    fileList: FileList
  ): { [file: string]: Promise<SavedCharacterModel> } {
    const fileBuffer: File[] = [];
    Array.prototype.push.apply(fileBuffer, fileList);

    const result: { [file: string]: Promise<SavedCharacterModel> } = {};
    fileBuffer.map(f => {
      const text = this.fileReaderService.readAsText(f);
      result[f.name] = text.then(s => {
        const sheet: SavedCharacterModel = this.jsonService.parse(s);
        if (sheet.name && sheet.form) {
          return sheet;
        }
        throw new Error(
          'The saved character model did not contain the appropriate data'
        );
      });
    });
    return result;
  }

  saveNewCharacters(models: { [file: string]: Promise<SavedCharacterModel> }): Promise<(SavedCharacterModel | string)[]> {
    const promises: Promise<SavedCharacterModel | string>[] = [];
    for (const key in models) {
      if (models.hasOwnProperty(key)) {
        const element = models[key];
        const promise = element.then(c => {
          this.formStorageService.saveNewForm(c.name, c.form);
        });
        const promiseWithoutRejection = promise
        .then(c => c)
        .catch(e => e) // we swallow the errors so that promise.all works
        .then(c => c);
        promises.push(promiseWithoutRejection);
      }
    }
    const completed = Promise.all(promises);
    return completed;
  }
}
