import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

@Injectable()
export class FormSaveService {
  private _saveSubject: Subject<void> = new Subject<void>();
  get saveObservable(): Observable<void> {
    return this._saveSubject;
  }
  private _updateSubject: Subject<void> = new Subject<void>();
  get updateObservable(): Observable<void> {
    return this._updateSubject;
  }
  constructor() { }

  save(): void {
    this._saveSubject.next();
  }
  update(): void {
    this._updateSubject.next();
  }
}
