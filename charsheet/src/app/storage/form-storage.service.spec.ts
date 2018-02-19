import { TestBed, inject } from '@angular/core/testing';

import { FormStorageService } from './form-storage.service';

describe('FormStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormStorageService]
    });
  });

  it('should be created', inject([FormStorageService], (service: FormStorageService) => {
    expect(service).toBeTruthy();
  }));
});
