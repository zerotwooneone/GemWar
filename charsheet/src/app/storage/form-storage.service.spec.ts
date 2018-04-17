import { TestBed, inject } from "@angular/core/testing";

import { FormStorageService } from "./form-storage.service";
import { CompressionService } from "../compression/compression.service";
import { SheetIdService } from "../sheet-id/sheet-id.service";
import { BrowserStorageService } from "./browser-storage.service";
import { FormModel } from "../form/form-model";
import { ISheetsStorageModel } from "../sheet/isheets-storage.model";
import { JsonService } from '../json/json.service';
import { ISheetStorageModel } from '../sheet/isheet-storage.model';
import { SheetStorageService } from './sheet-storage.service';
import { MockSheetStorageService } from '../../testing/mock-services';

describe('FormStorageService', () => {
  let sheetIdService: SheetIdService;
  let sheetStorageService: SheetStorageService;
  const storageKey = 'character sheets';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormStorageService,
        SheetIdService,
        { provide: SheetStorageService, useClass: MockSheetStorageService }
      ]
    });
    sheetIdService = TestBed.get(SheetIdService);
    sheetStorageService = TestBed.get(SheetStorageService);
  });

  it(
    'should be created',
    inject([FormStorageService], (service: FormStorageService) => {
      expect(service).toBeTruthy();
    })
  );
  it(
    'should add sheet to sheets',
    inject([FormStorageService], (service: FormStorageService) => {
      const charName = 'charName';
      const emptySheetsModel: ISheetsStorageModel = {};
      spyOn(sheetStorageService, 'get').and.returnValue(emptySheetsModel);
      const formValue: FormModel = new FormModel(0, 0, [], [], [], null);
      const sheetId = 'sheetId';
      const expectedSheets: ISheetsStorageModel = {};
      expectedSheets[sheetId] = { name: charName, value: formValue };
      spyOn(sheetStorageService, 'set');

      service.saveForm(sheetId, charName, formValue);

      expect(sheetStorageService.get).toHaveBeenCalled();
      expect(sheetStorageService.set).toHaveBeenCalledWith(expectedSheets);
    })
  );
  it(
    'should update char name',
    inject([FormStorageService], (service: FormStorageService) => {
      const formValue: FormModel = new FormModel(0, 0, [], [], [], null);
      const sheetId = 'sheetId';
      const initialSheetsModel: ISheetsStorageModel = {};
      initialSheetsModel[sheetId] = { name: 'initial', value: formValue };
      spyOn(sheetStorageService, 'get').and.returnValue(initialSheetsModel);
      const expectedSheets: ISheetsStorageModel = {};
      const charName = 'charName';
      expectedSheets[sheetId] = { name: charName, value: formValue };
      spyOn(sheetStorageService, 'set');

      service.saveForm(sheetId, charName, formValue);

      expect(sheetStorageService.get).toHaveBeenCalled();
      expect(sheetStorageService.set).toHaveBeenCalledWith(expectedSheets);
    })
  );
  it(
    'should delete form',
    inject([FormStorageService], (service: FormStorageService) => {
      const charName = 'charName';
      const initialSheetsModel: ISheetsStorageModel = {};
      const formValue: FormModel = new FormModel(0, 0, [], [], [], null);
      const sheetId = 'sheetId';
      initialSheetsModel[sheetId] = { name: charName, value: formValue };
      spyOn(sheetStorageService, 'get').and.returnValue(initialSheetsModel);
      const expectedSheets: ISheetsStorageModel = {};
      spyOn(sheetStorageService, 'set');

      service.deleteForm(sheetId);

      expect(sheetStorageService.get).toHaveBeenCalled();
      expect(sheetStorageService.set).toHaveBeenCalledWith(expectedSheets);
    })
  );
});
