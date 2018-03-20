import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/take';
import { Subject } from 'rxjs/Subject';
import { SaveResult } from './save-result';

@Injectable()
export class FormSaveService {
  private _saveSubject: Subject<Subject<string>> = new Subject<Subject<string>>();
  get saveObservable(): Observable<Subject<string>> {
    return this._saveSubject;
  }
  private _updateSubject: Subject<void> = new Subject<void>();
  get updateObservable(): Observable<void> {
    return this._updateSubject;
  }
  constructor() { }

  save(): SaveResult {
    const saveSubject = new Subject<string>();
    const result = new SaveResult(saveSubject.shareReplay(1).take(1));
    Observable.timer(100).subscribe(s => {
      this._saveSubject.next(saveSubject);
    });
    return result;
  }
  update(): void {
    this._updateSubject.next();
  }
}
