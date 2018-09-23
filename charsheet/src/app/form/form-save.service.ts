import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { shareReplay, take } from 'rxjs/operators';
import { SaveResult } from './save-result';

@Injectable()
export class FormSaveService {
  private _saveSubject: Subject<Subject<string>> = new Subject<Subject<string>>();
  get saveObservable(): Observable<Subject<string>> {
    return this._saveSubject;
  }
  private _updateSubject: Subject<Subject<string>> = new Subject<Subject<string>>();
  get updateObservable(): Observable<Subject<string>> {
    return this._updateSubject;
  }
  constructor() { }

  save(): SaveResult {
    const saveSubject = new Subject<string>();
    const result = new SaveResult(saveSubject.pipe(shareReplay(1), take(1)));
    timer(1).subscribe(s => {
      this._saveSubject.next(saveSubject);
    });
    return result;
  }
  update(): SaveResult {
    const updateSubject = new Subject<string>();
    const result = new SaveResult(updateSubject.pipe(shareReplay(1), take(1)));
    timer(1).subscribe(s => {
      this._updateSubject.next(updateSubject);
    });
    return result;
  }
}
