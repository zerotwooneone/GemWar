import { Injectable } from '@angular/core';
import { FormSaveService } from '../app/form/form-save.service';
import { FormModel } from '../app/form/form-model';
import { FormGroup } from '@angular/forms';
import { TraitGroupFactory } from '../app/trait/trait-group-factory';
import { FormStorageService } from '../app/storage/form-storage.service';
import { TraitFactoryService } from '../app/trait/trait-factory.service';
import { ISheetsStorageModel } from '../app/sheet/isheets-storage.model';
import { BrowserStorageService } from '../app/storage/browser-storage.service';
import { MostRecentService } from '../app/most-recent/most-recent.service';
import { ISheetStorageModel } from '../app/sheet/isheet-storage.model';
import { SheetStorageService } from '../app/storage/sheet-storage.service';
import { FileReaderService } from '../app/file/file-reader.service';
import { JsonLinkService } from '../app/json/json-link.service';
import { SavedCharacterModelService } from '../app/file/saved-character-model.service';

@Injectable()
export class MockFormSaveService extends FormSaveService {}

@Injectable()
export class MockTraitGroupFactory extends TraitGroupFactory {
  constructor() {
    super(null);
  }
  getFormGroup(formModel: FormModel): FormGroup {
    return <any>{ value: null };
  }
}

@Injectable()
export class MockFormStorageService extends FormStorageService {
  constructor() {
    super(null, null);
  }
  saveNewForm(charName: string, formValue: FormModel): string {
    return null;
  }

  saveForm(key: string, charName: string, formValue: FormModel): void {}

  loadForm(key: string): FormModel {
    return null;
  }

  getSheets(): ISheetsStorageModel {
    return null;
  }

  deleteForm(key: string): ISheetStorageModel {
    return null;
  }
}

@Injectable()
export class MockTraitFactoryService extends TraitFactoryService {
  getFormDefault(): FormModel {
    return new FormModel(0, 0, [], [], [], null);
  }
}

@Injectable()
export class MockBrowserStorageService extends BrowserStorageService {
  private storage: { [key: string]: string } = {};
  getItem(key: string): string {
    return this.storage[key];
  }
  setItem(key: string, data: string): void {
    this.storage[key] = data;
  }
}

@Injectable()
export class MockMostRecentService extends MostRecentService {
  constructor() {
    super(new MockBrowserStorageService());
  }
}

@Injectable()
export class MockSheetStorageService extends SheetStorageService {
  constructor() {
    super(null, null, null);
  }
}

@Injectable()
export class MockFileReaderService extends FileReaderService {
  readAsText(blob: Blob): Promise<string> {
    return null;
  }
}

@Injectable()
export class MockJsonLinkService extends JsonLinkService {
  constructor() {
    super(null, null);
  }
}

@Injectable()
export class MockSavedCharacterModelService extends SavedCharacterModelService {
  constructor() {
    super(null, null, null);
  }
}
