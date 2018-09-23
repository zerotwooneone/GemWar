import { Injectable } from '@angular/core';
import { SheetIdService } from '../sheet-id/sheet-id.service';
import { ISheetStorageModel } from '../sheet/isheet-storage.model';
import { FormModel } from '../form/form-model';
import { SheetStorageService } from './sheet-storage.service';

@Injectable()
export class FormStorageService {
  constructor(
    private sheetIdService: SheetIdService,
    private sheetStorageService: SheetStorageService
  ) {}

  saveNewForm(charName: string, formValue: FormModel): string {
    const key = this.sheetIdService.createGuid();
    this.saveForm(key, charName, formValue);
    return key;
  }

  saveForm(key: string, charName: string, formValue: FormModel): void {
    const sheets = this.sheetStorageService.get() || {};
    sheets[key] = { name: charName, value: formValue };
    this.sheetStorageService.set(sheets);
  }

  loadForm(key: string): FormModel {
    const sheets = this.sheetStorageService.get();
    if (sheets == null) {
      return null;
    }
    return sheets[key].value;
  }

  deleteForm(key: string): ISheetStorageModel {
    const sheets = this.sheetStorageService.get() || {};
    const deleted = sheets[key];
    delete sheets[key];
    this.sheetStorageService.set(sheets);
    return deleted;
  }
}
