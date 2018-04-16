import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentComponent } from './most-recent.component';
import { BrowserStorageService } from '../storage/browser-storage.service';
import { MockBrowserStorageService, MockMostRecentService } from '../../testing/mock-services';
import { MostRecentService } from './most-recent.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, NavigationExtras } from '@angular/router';

describe('MostRecentComponent', () => {
  let component: MostRecentComponent;
  let fixture: ComponentFixture<MostRecentComponent>;
  let mostRecentService: MostRecentService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostRecentComponent],
      providers: [{ provide: MostRecentService, useClass: MockMostRecentService }],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentComponent);
    component = fixture.componentInstance;

    mostRecentService = TestBed.get(MostRecentService);
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to new', () => {
    spyOn(mostRecentService, 'get').and.returnValue(null);
    spyOn(router, 'navigate');

    const expectedNavigationExtras: NavigationExtras = { skipLocationChange: true };
    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['/new'], expectedNavigationExtras);
  });

  it('should navigate to existing', () => {
    const expectedId = 'expectedId';
    spyOn(mostRecentService, 'get').and.returnValue(expectedId);
    spyOn(router, 'navigate');
    const expectedNavigationExtras: NavigationExtras = { skipLocationChange: true };

    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['/char', expectedId]);
  });
});
