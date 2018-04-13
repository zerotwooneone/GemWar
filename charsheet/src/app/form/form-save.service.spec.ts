import { TestBed, inject } from '@angular/core/testing';

import { FormSaveService } from './form-save.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

describe('FormSaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormSaveService]
    });
  });

  it('should be created', inject([FormSaveService], (service: FormSaveService) => {
    expect(service).toBeTruthy();
  }));
  it('should emit save', inject([FormSaveService], async (service: FormSaveService) => {
    const sheetId = 'sheetId';
    service.saveObservable.subscribe(t => {
      t.next(sheetId);
    });
    let actual: string = null;

    const saveResult = service.save();
    saveResult.sheetId.subscribe(s => {
      actual = s;
    });

    await Observable.forkJoin(saveResult.sheetId, service.saveObservable.take(1)).first().toPromise();

    expect(actual).toBe(sheetId);
  }));
  it('should emit update', inject([FormSaveService], async (service: FormSaveService) => {
    const sheetId = 'sheetId';
    service.updateObservable.subscribe(t => {
      t.next(sheetId);
    });
    let actual: string = null;

    const saveResult = service.update();
    saveResult.sheetId.subscribe(s => {
      actual = s;
    });

    await Observable.forkJoin(saveResult.sheetId, service.updateObservable.take(1)).first().toPromise();

    expect(actual).toBe(sheetId);
  }));
});
