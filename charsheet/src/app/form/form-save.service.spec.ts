import { TestBed, inject } from '@angular/core/testing';

import { FormSaveService } from './form-save.service';

describe('FormSaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormSaveService]
    });
  });

  it('should be created', inject([FormSaveService], (service: FormSaveService) => {
    expect(service).toBeTruthy();
  }));
  it('should emit save', inject([FormSaveService], (service: FormSaveService) => {
    let emitted: boolean = null;
    service.saveObservable.subscribe(t=>{
        emitted = true;
    })

    service.save();

    expect(emitted).toBeTruthy;
  }));
  it('should emit update', inject([FormSaveService], (service: FormSaveService) => {
    let emitted: boolean = null;
    service.updateObservable.subscribe(t=>{
        emitted = true;
    })

    service.update();

    expect(emitted).toBeTruthy;
  }));
});
