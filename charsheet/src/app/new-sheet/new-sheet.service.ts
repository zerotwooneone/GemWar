import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewSheetService {

  private _startOverSubject: Subject<void>;
  get startOverObservable(): Observable<void> {
    return this._startOverSubject;
  }
  constructor() {
    this._startOverSubject = new Subject<void>();
  }

  startOver(): void {
    this._startOverSubject.next();
  }
}
