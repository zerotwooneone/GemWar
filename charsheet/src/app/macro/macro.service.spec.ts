import { TestBed, inject } from '@angular/core/testing';

import { MacroService } from './macro.service';

describe('MacroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MacroService]
    });
  });

  it('should be created', inject([MacroService], (service: MacroService) => {
    expect(service).toBeTruthy();
  }));
});
