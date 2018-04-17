import { Injectable } from '@angular/core';
import { CompressionService } from '../compression/compression.service';
import { BrowserStorageService } from './browser-storage.service';
import { JsonService } from '../json/json.service';
import { ISheetsStorageModel } from '../sheet/isheets-storage.model';

@Injectable()
export class SheetStorageService {
  private sheetsKey = 'character sheets';
  constructor(
    private compressionService: CompressionService,
    private browserStorageService: BrowserStorageService,
    private jsonService: JsonService
  ) {}

  get(): ISheetsStorageModel {
    const data = this.browserStorageService.getItem(this.sheetsKey);
    if (!data) {
      return null;
    }
    const json = this.compressionService.decompress(data);
    const obj: ISheetsStorageModel = this.jsonService.parse(json);
    return obj;
  }

  set(sheets: ISheetsStorageModel): void {
    const json = this.jsonService.stringify(sheets);
    const compressed = this.compressionService.compress(json);
    this.browserStorageService.setItem(this.sheetsKey, compressed);
  }
}
