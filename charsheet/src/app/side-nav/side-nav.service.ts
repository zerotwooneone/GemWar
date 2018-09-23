import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class SideNavService {
  visibleObservable: Observable<boolean>;
  private visibleSubject: BehaviorSubject<boolean>;

  constructor() {
    this.visibleSubject = new BehaviorSubject(false);
    this.visibleObservable = this.visibleSubject;
  }

  toggle(): Promise<boolean> {
    const current = this.visibleSubject.getValue();
    const next = !current;
    this.visibleSubject.next(next);
    const result = this.visibleObservable.pipe(first()).toPromise();
    return result;
  }

  hide(): Promise<boolean> {
    this.visibleSubject.next(false);
    const result = this.visibleObservable.pipe(first()).toPromise();
    return result;
  }

  show(): Promise<boolean> {
    this.visibleSubject.next(true);
    const result = this.visibleObservable.pipe(first()).toPromise();
    return result;
  }

}
