import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {
  constructor() {}

  stringify(value: any): string {
    return JSON.stringify(value);
  }

  parse(text: string): any {
    return JSON.parse(text);
  }
}
