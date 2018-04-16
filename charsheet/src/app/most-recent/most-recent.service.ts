import { Injectable } from '@angular/core';
import { BrowserStorageService } from '../storage/browser-storage.service';

@Injectable()
export class MostRecentService {
  private mostRecentKey = 'most recent character';

  constructor(private browserStorageService: BrowserStorageService) { }

  get(): string {
    return this.browserStorageService.getItem(this.mostRecentKey);
  }

  set(value: string): void {
    this.browserStorageService.setItem(this.mostRecentKey, value);
  }
}
