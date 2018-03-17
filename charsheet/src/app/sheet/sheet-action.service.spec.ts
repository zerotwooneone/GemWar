import { TestBed, inject } from '@angular/core/testing';

import { SheetActionService } from './sheet-action.service';

describe('SheetActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetActionService]
    });
  });

  it('should be created', inject([SheetActionService], (service: SheetActionService) => {
    expect(service).toBeTruthy();
  }));
  it('should emit enable save', inject([SheetActionService], (service: SheetActionService) => {
    let actual: boolean = null;
    service.saveEnabled.subscribe(e => {
      actual = e;
    });

    service.enableSave();

    expect(actual).toBeTruthy();
  }));
  it('should emit disable update', inject([SheetActionService], (service: SheetActionService) => {
    let actual: boolean = null;
    service.updateEnabled.subscribe(e => {
      actual = e;
    });

    service.enableSave();

    expect(actual).toBeFalsy();
  }));
  it('should emit disable save', inject([SheetActionService], (service: SheetActionService) => {
    let actual: boolean = null;
    service.saveEnabled.subscribe(e => {
      actual = e;
    });

    service.enableUpdate();

    expect(actual).toBeFalsy();
  }));
  it('should emit enable update', inject([SheetActionService], (service: SheetActionService) => {
    let actual: boolean = null;
    service.updateEnabled.subscribe(e => {
      actual = e;
    });

    service.enableUpdate();

    expect(actual).toBeTruthy();
  }));
});
