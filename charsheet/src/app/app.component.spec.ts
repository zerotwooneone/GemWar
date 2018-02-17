import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { Attribute } from './attribute/attribute';
import { Skill } from './skill/skill';
import { Trait } from './trait/trait';
import { TraitComponent } from './trait/trait.component';
import { TraitGroupFactory } from './trait/trait-group-factory';

describe('AppComponent', () => {

  let spiritDieType = 1;
  let vigorDieType = 2;
  let traitGroupFactoryStub = {
    getMentalDefaults(): FormArray {
      let spiritFormGroup = new FormGroup({
        traitName: new FormControl('Spirit'),
        dieType: new FormControl(spiritDieType),
        dieCount: new FormControl(0),
        rollModifier: new FormControl(0),
        skills: new FormArray([])
      });
      return new FormArray([spiritFormGroup]);
    },
    getCorporealDefaults(): FormArray {
      let vigorFormGroup = new FormGroup({
        traitName: new FormControl('Vigor'),
        dieType: new FormControl(vigorDieType),
        dieCount: new FormControl(0),
        rollModifier: new FormControl(0),
        skills: new FormArray([])
      });
      return new FormArray([vigorFormGroup]);
    }
  }

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TraitComponent,
        WindSelectorComponent,
        WindBubbleComponent
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: TraitGroupFactory, useValue: traitGroupFactoryStub }]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
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
});
