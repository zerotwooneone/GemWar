import { TestBed, inject } from '@angular/core/testing';

import { FormStorageService } from './form-storage.service';
import { CompressionService } from '../compression/compression.service';
import { SheetIdService } from '../sheet-id/sheet-id.service';
import { BrowserStorageService } from './browser-storage.service';
import { FormModel } from '../form/form-model';
import { ISheetsStorageModel } from '../sheet/isheets-storage.model';

describe('FormStorageService', () => {
  let sheetIdService: SheetIdService;
  let compressionService: CompressionService;
  let browserStorageService: BrowserStorageService;
  const storageKey = 'character sheets';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormStorageService, SheetIdService, CompressionService, BrowserStorageService]
    });
    sheetIdService = TestBed.get(SheetIdService);
    compressionService = TestBed.get(CompressionService);
    browserStorageService = TestBed.get(BrowserStorageService);
  });

  it('should be created', inject([FormStorageService], (service: FormStorageService) => {
    expect(service).toBeTruthy();
  }));
  it('should save char name', inject([FormStorageService], (service: FormStorageService) => {
    const charName = 'charName';
    const compressed = 'compressed';
    spyOn(compressionService, 'compress').and.returnValue(compressed);
    spyOn(browserStorageService, 'setItem');
    spyOn(browserStorageService, 'getItem').and.returnValue(null);
    const formValue: FormModel = new FormModel(0, 0, [], [], []);
    const sheetId = 'sheetId';
    const sheets: ISheetsStorageModel = { sheetId: { name: charName, value: formValue } };

    service.saveForm(sheetId, charName, formValue);

    expect(service).toBeTruthy();
    expect(compressionService.compress).toHaveBeenCalledWith(JSON.stringify(sheets));
    expect(browserStorageService.setItem).toHaveBeenCalledWith(storageKey, compressed);
    expect(browserStorageService.getItem).toHaveBeenCalledWith(storageKey);
  }));
  it('should update char name', inject([FormStorageService], (service: FormStorageService) => {
    const charName = 'charName';
    const compressed = 'compressed';
    spyOn(compressionService, 'compress').and.returnValue(compressed);
    spyOn(browserStorageService, 'setItem');
    const formValue = new FormModel(0, 0, [], [], []);
    const sheetId = 'sheetId';
    const sheets: ISheetsStorageModel = { sheetId: { name: charName, value: formValue } };
    const origSheets = { sheetId: { name: 'old char name', formValue: formValue } };
    spyOn(browserStorageService, 'getItem').and.returnValue(origSheets);
    const decompressed = '{}';
    spyOn(compressionService, 'decompress').and.returnValue(decompressed);

    service.saveForm(sheetId, charName, formValue);

    expect(service).toBeTruthy();
    expect(compressionService.compress).toHaveBeenCalledWith(JSON.stringify(sheets));
    expect(browserStorageService.setItem).toHaveBeenCalledWith(storageKey, compressed);
    expect(browserStorageService.getItem).toHaveBeenCalledWith(storageKey);
  }));
});
