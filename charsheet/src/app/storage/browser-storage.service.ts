import { Injectable } from '@angular/core';

@Injectable()
export class BrowserStorageService {

  constructor() { }
  getItem(key: string): string {
    return localStorage.getItem(key);
  }
  setItem(key: string, data: string): void {
    return localStorage.setItem(key, data);
  }
}
