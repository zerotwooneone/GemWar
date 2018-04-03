import { TestBed, async, ComponentFixture, inject, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { TraitComponent } from './trait/trait.component';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { FormStorageService } from './storage/form-storage.service';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click, Router } from '../testing/index';
import { TraitFactoryService } from './trait/trait-factory.service';
import { MatSnackBarModule, MatIcon, MatIconModule, MatFormFieldModule } from '@angular/material';
import { SkillComponentComponent } from './skill/skill-component/skill-component.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EdgeHinderanceComponent } from './edge-hinderance/edge-hinderance.component';
import { EdgeModel } from './edge-hinderance/edge-model';
import { FormSaveService } from './form/form-save.service';
import { SaveResult } from './form/save-result';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MockNavWrapperComponent } from '../testing/mock-components';
import { SideNavService } from './side-nav/side-nav.service';

describe('AppComponent', () => {

  let saveElement: DebugElement;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let sideNavService: SideNavService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockNavWrapperComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, MatSnackBarModule,
        NoopAnimationsModule,
        MatSidenavModule,
        RouterTestingModule,
        MatIconModule,
        FlexLayoutModule,
        MatFormFieldModule],
      providers: [TraitGroupFactory,
        TraitFactoryService,
        FormBuilder,
        SideNavService]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    saveElement = fixture.debugElement.query(By.css('.save-form'));
    const formBuilder = TestBed.get(FormBuilder);

    sideNavService = TestBed.get(SideNavService);

    fixture.detectChanges();
  });
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it('should emit show menu', async(async () => {
    let actual: boolean = null;
    sideNavService.visibleObservable.subscribe(v => {
      actual = v;
    });

    await app.openMenu();

    expect(actual).toBeTruthy();
  }));
});
