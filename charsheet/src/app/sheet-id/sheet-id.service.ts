import { Injectable } from '@angular/core';

@Injectable()
export class SheetIdService {

  constructor() { }

  createGuid(): string {
    function s4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toLowerCase();
  }
}
