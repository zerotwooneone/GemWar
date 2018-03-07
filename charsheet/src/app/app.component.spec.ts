import { TestBed, async, ComponentFixture, inject, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { TraitComponent } from './trait/trait.component';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { FormStorageService } from './storage/form-storage.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../testing/index';
import { TraitFactoryService } from './trait/trait-factory.service';
import { MatSnackBarModule } from '@angular/material';
import { SkillComponentComponent } from './skill/skill-component/skill-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EdgeHinderanceComponent } from './edge-hinderance/edge-hinderance.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EdgeModel } from './edge-hinderance/edge-model';

describe('AppComponent', () => {

  
  let saveElement: DebugElement;

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let formStorageService: FormStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TraitComponent,
        WindSelectorComponent,
        WindBubbleComponent,
        SkillComponentComponent,
        EdgeHinderanceComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, MatSnackBarModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatSidenavModule,
        MatExpansionModule,
        MatSlideToggleModule],
      providers: [TraitGroupFactory,
        FormStorageService,
        TraitFactoryService,
      FormBuilder]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    saveElement = fixture.debugElement.query(By.css('.save-form'));
    let formBuilder = TestBed.get(FormBuilder);
    let traitFactoryService: TraitFactoryService = TestBed.get(TraitFactoryService);
    spyOn(traitFactoryService, 'getFormDefault').and.returnValue({
      edgeModels:[]
    });
    let traitGroupFactory: TraitGroupFactory = TestBed.get(TraitGroupFactory);
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
      ]),
      edges: formBuilder.array([formBuilder.group(new EdgeModel())])
    }));

    formStorageService = TestBed.get(FormStorageService);
    spyOn(formStorageService, 'saveForm');

    fixture.detectChanges();
  });
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

});
