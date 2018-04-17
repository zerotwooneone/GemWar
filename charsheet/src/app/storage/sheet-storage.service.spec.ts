import { TestBed, inject } from '@angular/core/testing';

import { SheetStorageService } from './sheet-storage.service';
import { CompressionService } from '../compression/compression.service';
import { BrowserStorageService } from './browser-storage.service';
import { JsonService } from '../json/json.service';
import { MockBrowserStorageService } from '../../testing/mock-services';
import { ISheetsStorageModel } from '../sheet/isheets-storage.model';

describe('SheetStorageService', () => {
  let compressionService: CompressionService;
  let browserStorageService: BrowserStorageService;
  let jsonService: JsonService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SheetStorageService,
        { provide: BrowserStorageService, useClass: MockBrowserStorageService },
        JsonService,
        CompressionService
      ]
    });
    compressionService = TestBed.get(CompressionService);
    browserStorageService = TestBed.get(BrowserStorageService);
    jsonService = TestBed.get(JsonService);
  });

  it(
    'should be created',
    inject([SheetStorageService], (service: SheetStorageService) => {
      expect(service).toBeTruthy();
    })
  );
  it(
    'should return compressed sheets',
    inject([SheetStorageService], (service: SheetStorageService) => {
      const browserString = 'browserString';
      spyOn(browserStorageService, 'getItem').and.returnValue(browserString);
      const decopressedString = 'decopressedString';
      spyOn(compressionService, 'decompress').and.returnValue(
        decopressedString
      );
      const sheetsModel: ISheetsStorageModel = {};
      spyOn(jsonService, 'parse').and.returnValue(sheetsModel);

      const acutal = service.get();

      expect(acutal).toBe(sheetsModel);
      expect(jsonService.parse).toHaveBeenCalledWith(decopressedString);
      expect(compressionService.decompress).toHaveBeenCalledWith(browserString);
    })
  );
  it(
    'should save compressed sheets',
    inject([SheetStorageService], (service: SheetStorageService) => {
      const sheetsModel: ISheetsStorageModel = {};
      const jsonString = 'jsonString';
      spyOn(jsonService, 'stringify').and.returnValue(jsonString);
      const compressedString = 'compressedString';
      spyOn(compressionService, 'compress').and.returnValue(compressedString);
      spyOn(browserStorageService, 'setItem');

      service.set(sheetsModel);

      expect(jsonService.stringify).toHaveBeenCalledWith(sheetsModel);
      expect(compressionService.compress).toHaveBeenCalledWith(jsonString);
      expect(browserStorageService.setItem).toHaveBeenCalled();
    })
  );
});
