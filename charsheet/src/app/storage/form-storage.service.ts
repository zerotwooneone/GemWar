import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CompressionService } from '../compression/compression.service';
import { SheetIdService } from '../sheet-id/sheet-id.service';
import { BrowserStorageService } from './browser-storage.service';
import { ISheetsStorageModel } from '../sheet/isheets-storage.model';
import { ISheetStorageModel } from '../sheet/isheet-storage.model';
import { FormModel } from '../form/form-model';

@Injectable()
export class FormStorageService {

  private sheetsKey = 'character sheets';
  constructor(private compressionService: CompressionService,
    private sheetIdService: SheetIdService,
    private browserStorageService: BrowserStorageService) { }

  saveNewForm(charName: string, formValue: FormModel): string {
    const key = this.sheetIdService.createGuid();
    this.saveForm(key, charName, formValue);
    return key;
  }

  saveForm(key: string, charName: string, formValue: FormModel): void {
    const sheets = this.getSheets() || {};
    sheets[key] = { name: charName, value: formValue };
    const json = JSON.stringify(sheets);
    const compressed = this.compressionService.compress(json);
    this.browserStorageService.setItem(this.sheetsKey, compressed);
  }

  loadForm(key: string): FormModel {
    const obj = this.getSheets();
    if (obj == null) {
      return null;
    }
    return obj[key].value;
  }

  getSheets(): ISheetsStorageModel {
    const data = this.browserStorageService.getItem(this.sheetsKey);
    if (!data) {
      return null;
    }
    const json = this.compressionService.decompress(data);
    const obj: ISheetsStorageModel = JSON.parse(json);
    return obj;
  }
}
