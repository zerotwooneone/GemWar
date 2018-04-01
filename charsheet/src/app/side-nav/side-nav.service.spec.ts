import { TestBed, inject } from '@angular/core/testing';

import { SideNavService } from './side-nav.service';

describe('SideNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideNavService]
    });
  });

  it('should be created', inject([SideNavService], (service: SideNavService) => {
    expect(service).toBeTruthy();
  }));
  it('should return true when toggled', inject([SideNavService], async (service: SideNavService) => {
    const actual = await service.toggle();
    expect(actual).toBeTruthy();
  }));
  it('should return false when toggled twice', inject([SideNavService], async (service: SideNavService) => {
    await service.toggle();
    const actual = await service.toggle();
    expect(actual).toBeFalsy();
  }));
  it('should emit true when toggled', inject([SideNavService], async (service: SideNavService) => {
    let actual: boolean = null;
    service.visibleObservable.subscribe(v => {
      actual = v;
    });
    await service.toggle();
    expect(actual).toBeTruthy();
  }));
  it('should emit false when toggled twice', inject([SideNavService], async (service: SideNavService) => {
    await service.toggle();
    let actual: boolean = null;
    service.visibleObservable.subscribe(v => {
      actual = v;
    });
    await service.toggle();
    expect(actual).toBeFalsy();
  }));
});
