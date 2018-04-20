import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SavedCharactersService {

  reloadObservable: Observable<void>;
  private reloadSubject: Subject<void>;
  constructor() {
    this.reloadSubject = new Subject<void>();
    this.reloadObservable = this.reloadSubject;
   }

   Reload(): void {
     this.reloadSubject.next();
   }
}
