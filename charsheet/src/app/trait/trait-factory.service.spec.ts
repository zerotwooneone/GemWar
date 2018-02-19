import { TestBed, inject } from '@angular/core/testing';

import { TraitFactoryService } from './trait-factory.service';

describe('TraitFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraitFactoryService]
    });
  });

  it('should be created', inject([TraitFactoryService], (service: TraitFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
