import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SheetActionService {
  private _saveEnabled: Subject<boolean>;
  get saveEnabled(): Observable<boolean> { return this._saveEnabled; }
  private _updateEnabled: Subject<boolean>;
  get updateEnabled(): Observable<boolean> { return this._updateEnabled; }

  constructor() {
    this._saveEnabled = new Subject<boolean>();
    this._updateEnabled = new Subject<boolean>();
  }

  enableSave(): any {
    this._saveEnabled.next(true);
    this._updateEnabled.next(false);
  }

  enableUpdate(): any {
    this._saveEnabled.next(false);
    this._updateEnabled.next(true);
  }
}
