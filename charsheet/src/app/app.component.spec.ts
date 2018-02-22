import { TestBed, async, ComponentFixture, inject, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { Skill } from './skill/skill';
import { Trait } from './trait/trait';
import { TraitComponent } from './trait/trait.component';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { FormStorageService } from './storage/form-storage.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../testing/index';
import { TraitFactoryService } from './trait/trait-factory.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

describe('AppComponent', () => {

  let spiritDieType = 1;
  let vigorDieType = 2;
  let saveElement: DebugElement;

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let formStorageService: FormStorageService;
  let snackBar: MatSnackBar;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TraitComponent,
        WindSelectorComponent,
        WindBubbleComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, MatSnackBarModule],
      providers: [TraitGroupFactory,
        FormStorageService,
        TraitFactoryService]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    saveElement = fixture.debugElement.query(By.css('.save-form'));
    let traitFactoryService: TraitFactoryService = (<any>app).traitFactoryService;
    spyOn(traitFactoryService, 'getFormDefault').and.returnValue({});
    let traitGroupFactory: TraitGroupFactory = (<any>app).traitGroupFactory;
    spyOn(traitGroupFactory, 'getFormGroup').and.returnValue(new FormGroup({
      "currentWind": new FormControl(0),
      "currentStrain": new FormControl(0),
      "mentalTraits": new FormArray([
        new FormGroup({
          "traitName": new FormControl('Spirit'),
          "dieType": new FormControl(spiritDieType),
          "dieCount": new FormControl(0),
          "rollModifier": new FormControl(null),
          "skills": new FormArray([new FormGroup({
            "skillName": new FormControl('Faith'),
            "specialization": new FormControl(null),
            "dieCount": new FormControl(0)
          })])
        })
      ]),
      "corporealTraits": new FormArray([
        new FormGroup({
          "traitName": new FormControl('Vigor'),
          "dieType": new FormControl(vigorDieType),
          "dieCount": new FormControl(0),
          "rollModifier": new FormControl(null),
          "skills": new FormArray([new FormGroup({
            "skillName": new FormControl('Faith'),
            "specialization": new FormControl(null),
            "dieCount": new FormControl(0)
          })])
        })
      ])
    }));

    formStorageService = (<any>app).formStorageService;
    spyOn(formStorageService, 'saveForm');

    snackBar = TestBed.get(MatSnackBar);

    fixture.detectChanges();
  });
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it('should load mental traits',
    () => {
      expect(app.mentalTraits).toBeTruthy();
    });
  it('should load corporeal traits',
    () => {
      expect(app.corporealTraits).toBeTruthy();
    });
  it('should provide wind total',
    () => {
      let expected = spiritDieType + vigorDieType;
      expect(app.windTotal).toBe(expected);
    });
  it('should provide strain maximum',
    () => {
      let expected = vigorDieType;
      expect(app.strainMax).toBe(expected);
    });
  it('should call save',
    () => {
      click(saveElement);

      expect(formStorageService.saveForm).toHaveBeenCalled();
    });
  it('should call back with true when not dismissed by action',
    () => {
      spyOn(snackBar, 'open').and.returnValue({
        afterDismissed: () => Observable.of({ dismissedByAction: false })
      });
      let actual: boolean = null;
      let callback: (doRemove: boolean) => void = (doRemove: boolean) => {
        actual = doRemove;
      };

      let content = {};
      app.confirmRemoveSkill(callback, content);
      expect(actual).toBe(true);
    });
  it('should call back with false when dismissed by action',
    () => {
      spyOn(snackBar, 'open').and.returnValue({
        afterDismissed: () => Observable.of({ dismissedByAction: true })
      });
      let actual: boolean = null;
      let callback: (doRemove: boolean) => void = (doRemove: boolean) => {
        actual = doRemove;
      };

      let content = {};
      app.confirmRemoveSkill(callback, content);
      expect(actual).toBe(false);
    });
});
